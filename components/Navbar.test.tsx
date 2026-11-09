import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the navbar", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("contains a Get a Quote CTA button", () => {
    render(<Navbar />);
    const cta = screen.getByRole("link", { name: /get a quote/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "/contact");
  });
});
