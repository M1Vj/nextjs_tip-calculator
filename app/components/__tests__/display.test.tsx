import { render, screen } from "@testing-library/react";
import Display from "../Display";

const php = (n: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

describe("Display", () => {
  it("shows PHP amounts with two decimals", () => {
    render(<Display tipPerPerson={4.27} totalPerPerson={32.79} onReset={() => {}} />);
    expect(screen.getByText(php(4.27))).toBeInTheDocument();
    expect(screen.getByText(php(32.79))).toBeInTheDocument();
  });

  it("disables reset when values are zero", () => {
    render(<Display tipPerPerson={0} totalPerPerson={0} onReset={() => {}} />);
    const btn = screen.getByRole("button", { name: /reset/i });
    expect(btn).toBeDisabled();
  });
});
