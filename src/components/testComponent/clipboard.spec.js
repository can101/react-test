import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { useState } from "react"
import userEvent from "@testing-library/user-event";


function Counter() {
    const [count, setCount] = useState(0);
    const handleCopy = () => window.navigator.clipboard.writeText("Heey");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCopy}>Copy</button>
            <input type="text" />
        </div>
    )
}


it("should render the element correctly", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.keyboard('[tab]');
    await user.keyboard('[enter]');

    const inputElement = screen.getByRole("textbox");
    inputElement.focus()
    // await user.keyboard('[tab]');

    await user.paste();
    expect(inputElement).toHaveValue("Heey")
})