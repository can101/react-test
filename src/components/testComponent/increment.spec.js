import { render, screen } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

function Counter() {
    const [count, setCount] = useState(1);
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
    await user.pointer({
        keys: '[MouseLeft]',
        target: screen.getByRole('button', { name: "increment" })
    })
    const headingElement = await screen.findByRole("heading");
    expect(headingElement).toHaveTextContent(2);
    // expect(screen.getByRole("heading")).toHaveTextContent(2);
})