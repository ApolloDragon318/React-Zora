import React, { useState, useCallback, useEffect } from "react";
import { Pagination, Container, CircularProgress, Box } from "@mui/material";

import unsplash from "../app/unsplash";

import SearchInput from "../components/SearchInput";
import MyImageList from "../components/MyImageList";
import ToolBar from "../components/ToolBar";

const ImageDashboard = () => {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(21);
  const [sortBy, setSortBy] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  const fetchData = async () => {
    const params = {
      query: term,
      page: activePage,
      per_page: perPage,
      order_by: sortBy ? "latest" : "popular",
    };
    if (filterBy !== "") params.color = filterBy;
    const response = await unsplash.get("/search/photos", { params });
    return response.data;
  };

  const onSubmitSearchInput = useCallback((searchInput) => {
    setTerm(searchInput);
    setLoading("loading");
  }, []);

  const handlePageChange = (event, newPage) => {
    setActivePage(newPage);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (term === "") return;

      try {
        setLoading("loading");
        const data = await fetchData();

        setImages(data.results);
        setTotal(data.total);
        setTotalPages(data.total_pages);
        setLoading("");
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [term, activePage, sortBy, filterBy]);

  return (
    <Container fixed className="image-dashboard">
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <SearchInput onSubmitSearchInput={onSubmitSearchInput} term={term} />
          {total > 0 && (
            <>
              <ToolBar
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
              <MyImageList images={images} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 3,
                }}
              >
                <Pagination
                  count={totalPages}
                  color="primary"
                  page={activePage}
                  onChange={handlePageChange}
                />
              </Box>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default ImageDashboard;
