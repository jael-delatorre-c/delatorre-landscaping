import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("shows hero headline Premium Landscaping", () => {
    render(<HomePage />);
    expect(screen.getByText(/Premium Landscaping/i)).toBeInTheDocument();
  });

  it("shows hero subline about high-quality installs", () => {
    render(<HomePage />);
    expect(screen.getByText(/High-quality installs, sharp weekly maintenance/i)).toBeInTheDocument();
  });

  it("hero shows pool patio image (ChatGPT Image)", () => {
    render(<HomePage />);
    const imgs = screen.getAllByRole("img");
    const heroImg = imgs.find((img) => img.getAttribute("src")?.includes("ChatGPT") || img.getAttribute("src")?.includes("02_38_58"));
    expect(heroImg).toBeDefined();
  });

  it("services section shows striped lawn image", () => {
    render(<HomePage />);
    const imgs = screen.getAllByRole("img");
    const servicesImg = imgs.find((img) => img.getAttribute("src")?.includes("IMG_20210616_101017"));
    expect(servicesImg).toBeDefined();
  });

  it("Featured Projects show correct titles", () => {
    render(<HomePage />);
    expect(screen.getByText("Garden & Planting Beds")).toBeInTheDocument();
    expect(screen.getByText("Weekly Lawn Striping")).toBeInTheDocument();
    expect(screen.getByText("Poolside Grounds Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Pool Patio & Stonework")).toBeInTheDocument();
    expect(screen.getByText("Vine Installation & Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Bush Trimming")).toBeInTheDocument();
  });

  it("hero headline reads 'Lasting Results.'", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Premium Landscaping. Clean Lines. Lasting Results."
    );
  });

  it("no heading shows literal square-bracket placeholders", () => {
    render(<HomePage />);
    for (const h of screen.getAllByRole("heading")) {
      expect(h.textContent).not.toMatch(/[\[\]]/);
    }
    expect(screen.getByRole("heading", { name: "Featured Projects" })).toBeInTheDocument();
  });

  it("every image has descriptive alt text", () => {
    const { container } = render(<HomePage />);
    for (const img of container.querySelectorAll("img")) {
      expect(img.getAttribute("alt")?.trim()).toBeTruthy();
    }
  });

  it("content is visible by default (no opacity-0 before JS runs)", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector('[data-reveal="hidden"]')).toBeNull();
    expect(container.querySelector(".opacity-0")).toBeNull();
  });
});
