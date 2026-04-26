import { render, screen, fireEvent } from "@testing-library/react";

// Mock react-router-dom before importing Header
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => {
    return <a href={to} data-testid={`link-${to}`}>{children}</a>;
  }
}), { virtual: true });

// Import Header after the mock
import Header from "./Header";

describe("Header Component", () => {
  test("renders the logo image", () => {
    render(<Header />);
    
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/logo192.png");
  });

  test("renders all navigation links", () => {
    render(<Header />);
    
    expect(screen.getByText("Find a Rental")).toBeInTheDocument();
    expect(screen.getByText("List your rental")).toBeInTheDocument();
    expect(screen.getByText("Travel Guides")).toBeInTheDocument();
    expect(screen.getByText("Regions")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders top bar buttons", () => {
    render(<Header />);
    
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("renders language switcher", () => {
    render(<Header />);
    
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  test("renders search input field", () => {
    render(<Header />);
    
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
    expect(searchInput).toHaveAttribute("name", "q");
  });

  test("search input accepts user input", () => {
    render(<Header />);
    
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "beach house" } });
    
    expect(searchInput.value).toBe("beach house");
  });

  test("renders all navigation links as anchor tags", () => {
    render(<Header />);
    
    const links = screen.getAllByTestId(/link-/);
    expect(links.length).toBeGreaterThan(0);
  });
});