import { render, screen } from "@testing-library/react";
import StringCalculator from "./StringCalculator";
import { add } from "./utils/calculator";

test("renders input and button", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter numbers...")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
});

test("returns sum of numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});
