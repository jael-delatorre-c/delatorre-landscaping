import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("displays phone number 845-453-1985", () => {
    render(<Footer />);
    expect(screen.getByText(/845-453-1985/)).toBeInTheDocument();
  });

  it("displays email delatorrelandscaping@outlook.com", () => {
    render(<Footer />);
    expect(screen.getByText(/delatorrelandscaping@outlook\.com/)).toBeInTheDocument();
  });
});
