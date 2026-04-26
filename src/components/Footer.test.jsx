import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders author name correctly", () => {
    const userData = {
      author: "Develop by Khurram Pasha",
      id: "ID# 20012745"
    };
    
    render(<Footer name={userData} />);
    
    expect(screen.getByText(/Develop by Khurram Pasha/i)).toBeInTheDocument();
    expect(screen.getByText(/ID# 20012745/i)).toBeInTheDocument();
  });
});