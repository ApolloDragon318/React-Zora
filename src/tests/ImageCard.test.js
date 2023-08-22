import { render, screen } from "@testing-library/react";
import ImageCard from "../components/ImageCard";

const image = {
  description: "Test Image",
  id: "12345",
  url: "https://example.com/image.jpg",
};

test("render ImageCard with props", () => {
  render(
    <ImageCard description={image.description} id={image.id} url={image.url} />
  );

  const imageElement = screen.getByTestId(image.id);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.getAttribute("alt")).toBe(image.description);
  expect(imageElement.getAttribute("src")).toBe(image.url);
  expect(imageElement.getAttribute("loading")).toBe("lazy");
});
