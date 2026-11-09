import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesGrid } from "./ServicesGrid";

const mockServices = [
  { slug: "lawn-care", name: "[Service Name A]", description: "[Description A]" },
  { slug: "hardscaping", name: "[Service Name B]", description: "[Description B]" },
];

describe("ServicesGrid", () => {
  it("renders service items", () => {
    render(<ServicesGrid services={mockServices} />);
    expect(screen.getByText("[Service Name A]")).toBeInTheDocument();
    expect(screen.getByText("[Service Name B]")).toBeInTheDocument();
  });
});
