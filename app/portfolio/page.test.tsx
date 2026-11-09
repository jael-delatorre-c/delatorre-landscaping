import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PortfolioPage from "./page";

describe("PortfolioPage", () => {
  it("shows all project titles including Vine and Bush Trimming", () => {
    render(<PortfolioPage />);
    expect(screen.getByText("Garden & Planting Beds")).toBeInTheDocument();
    expect(screen.getByText("Weekly Lawn Striping")).toBeInTheDocument();
    expect(screen.getByText("Poolside Grounds Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Pool Patio & Stonework")).toBeInTheDocument();
    expect(screen.getByText("Vine Installation & Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Bush Trimming")).toBeInTheDocument();
  });

  it("shows Dutchess County for projects", () => {
    render(<PortfolioPage />);
    expect(screen.getAllByText("Dutchess County").length).toBeGreaterThanOrEqual(6);
  });
});
