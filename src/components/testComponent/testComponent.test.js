import { render, screen } from "@testing-library/react"

function TestComponent() {
    return (
        <>
            <button>Test</button>
            <button>Test 2</button>
        </>
    )
}

it("should render the element correctly", () => {
    render(<TestComponent />);
    const element = screen.getByRole("button", {
        name: "Test"
    });
    expect(element).toBeInTheDocument();
})