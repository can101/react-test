import { render, screen } from "@testing-library/react"

function TestComponent() {
    return (
        <>
            <button>Test</button>
            <button>Test 2</button>
        </>
    )
}

function TestTwoComponent() {
    return (
        <>
            {/* <label htmlFor="user-name">User Name:</label>
            <input id="user-name" /> */}
            {/* <input placeholder="Enter your username" /> */}
            Modern testing
        </>
    )
}


it("should render the element correctly", () => {
    render(<TestTwoComponent />);
    const element = screen.getByText("Modern testing");
    // const element = screen.getByPlaceholderText("Enter your username");
    expect(element).toBeInTheDocument();
})
// it("should render the element correctly", () => {
//     render(<TestTwoComponent />);
//     const element = screen.getByLabelText("User Name:");
//     expect(element).toBeInTheDocument();
// })

it("should render the element correctly", () => {
    render(<TestComponent />);
    const element = screen.getByRole("button", {
        name: "Test"
    });
    expect(element).toBeInTheDocument();
})