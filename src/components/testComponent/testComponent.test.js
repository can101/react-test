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
            {/* Modern testing */}
            {/* <input defaultValue={"Modern testing"}/> */}
            {/* <img src="#"  alt="Modern testing"/> */}
            {/* <div title="MODERN">Modern</div> */}
            <div data-testid="example">Modern</div>
            <div data-testid="example2">Modern</div>
        </>
    )
}


it("should render the element correctly", () => {
    render(<TestTwoComponent />);
    // const element = screen.getByDisplayValue("Modern testing");
    // const element = screen.getByTitle("MODERN");
    const element = screen.getByTestId("example");
    const element2 = screen.getByTestId("example2");
    // const element = screen.getAllByAltText("Modern testing");
    // const element = screen.getByText("Modern testing");
    // const element = screen.getByPlaceholderText("Enter your username");
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    // expect(element.src).toBe("#");
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