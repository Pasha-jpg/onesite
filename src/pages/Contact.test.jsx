import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Component", () => {

  test('renders the correct h2 heading', () => {
   // 1. Render the component
  render(<Contact />);
  // 2. Query for the h2 element by its role and level
  const heading = screen.getByRole('heading', { level: 2 });  
  
  // 3. Assert it exists and has the correct text
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/CONTACT US/i);
});
});