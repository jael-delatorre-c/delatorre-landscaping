import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("shows About Delatorre Landscaping and Dutchess County", () => {
    render(<AboutPage />);
    expect(screen.getByText(/About Delatorre Landscaping/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Dutchess County/i).length).toBeGreaterThan(0);
  });

  it("shows barn/garden image (IMG_20210619_142702)", () => {
    render(<AboutPage />);
    const imgs = screen.getAllByRole("img");
    const aboutImg = imgs.find((img) => img.getAttribute("src")?.includes("IMG_20210619_142702"));
    expect(aboutImg).toBeDefined();
  });
});
