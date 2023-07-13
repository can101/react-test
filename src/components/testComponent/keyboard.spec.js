import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { useState } from "react"
import userEvent from "@testing-library/user-event";


function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(prev => prev + 1)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>increment</button>
        </>
    )
}


it("should render the element correctly", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const buttonElement = screen.getByRole('button', { name: "increment" })
    
    await user.keyboard('[tab]');
    await user.keyboard('[enter]');

    const headingElement = await screen.findByRole("heading");

    expect(buttonElement).toHaveFocus();
    expect(headingElement).toHaveTextContent("1");
})