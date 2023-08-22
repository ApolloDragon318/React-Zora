import React from "react";
import { render, screen } from "@testing-library/react";
import MyImageList from "../components/MyImageList";

describe("MyImageList", () => {
  it("renders an image list correctly", () => {
    const mockImages = [
      { id: "1", description: "Image 1", url: "http://example.com/image1.jpg" },
      { id: "2", description: "Image 2", url: "http://example.com/image2.jpg" },
      { id: "3", description: "Image 3", url: "http://example.com/image3.jpg" },
    ];

    render(<MyImageList images={mockImages} />);

    mockImages.forEach((image) => {
      expect(screen.getByAltText(image.description)).toBeInTheDocument();
      expect(screen.getByAltText(image.description)).toHaveAttribute(
        "src",
        image.url
      );
    });
  });
});
