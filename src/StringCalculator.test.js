import { render, screen } from "@testing-library/react";
import StringCalculator from "./StringCalculator";

test("renders input and button", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
});