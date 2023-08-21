import React, {useState, useCallback, useEffect} from 'react'
import SearchInput from '../components/SearchInput';
import unsplash from '../app/unsplash';
import MyImageList from '../components/MyImageList';
import { Pagination } from '@mui/material';

const ImageDashboard = () => {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const fetchData = async () => {
    console.log(activePage);
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: activePage, per_page: perPage },
    });
    return response.data;
  };

  const onSubmitSearchInput = useCallback(searchInput => {
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

        console.log(data);
        setImages(data.results);
        setTotal(data.total);
        setTotalPages(data.total_pages);
        setLoading("");
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [term, activePage]);

  return (
    loading ? <div>Loading...</div> :
    <div>
      <SearchInput onSubmitSearchInput={onSubmitSearchInput}/>
      {images.length > 0 && <MyImageList images={images} />}
      {totalPages > 0 && <Pagination count={totalPages} color="primary" page={activePage} onChange={handlePageChange} />}
    </div>
  )
}

export default ImageDashboard;