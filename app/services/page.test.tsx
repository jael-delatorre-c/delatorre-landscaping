import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesPage from "./page";

describe("ServicesPage", () => {
  it("renders all six services", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Weekly Grounds Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Garden & Planting Care")).toBeInTheDocument();
    expect(screen.getByText("Property Clearing & Brush Management")).toBeInTheDocument();
    expect(screen.getByText("Seasonal Cleanups")).toBeInTheDocument();
    expect(screen.getByText("Snow & Ice Management")).toBeInTheDocument();
    expect(screen.getByText("Tree & Stormwork Removal")).toBeInTheDocument();
  });
});
