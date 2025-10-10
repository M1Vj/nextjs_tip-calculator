import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keypad from "../Keypad";

describe("Keypad", () => {
  it("calls onSelect when a preset is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Keypad selected={10} onSelect={onSelect} />);
    await user.click(screen.getByRole("radio", { name: "15% tip" }));
    expect(onSelect).toHaveBeenCalledWith(15);
  });
});
