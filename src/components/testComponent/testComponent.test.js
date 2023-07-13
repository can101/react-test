import { render, screen } from "@testing-library/react"
import { useEffect, useState } from "react"

function TestComponent() {
    return (
        <>
            <button>Test</button>
            <button>Test 2</button>
        </>
    )
}

function TestTwoComponent({ products }) {
    return (
        <>
            {/* <label htmlFor="user-name">User Name:</label>
            <input id="user-name" /> */}
            {/* <input placeholder="Enter your username" /> */}
            {/* Modern testing */}
            {/* <input defaultValue={"Modern testing"}/> */}
            {/* <img src="#"  alt="Modern testing"/> */}
            {/* <div title="MODERN">Modern</div> */}
            {/* <div data-testid="example">Modern</div>
            <div data-testid="example2">Modern</div> */}
            <ul>
                {products.map((product, index) => <li key={index}>{product}</li>)}
            </ul>
        </>
    )
}

function TestThreeComponent({ suffix }) {
    return (<div>Modern Testing:
        {/* {suffix ? suffix : 'Suffix yok'} */}
        {!suffix && <p>Suffix yok</p>}
        {suffix && <p>{suffix}</p>}
    </div>)
}

function TestFourComponent() {
    const [message, setMessage] = useState("can");
    useEffect(() => {
        setTimeout(() => {
            setMessage("Emre")
        }, 300)
    }, [])
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

// it("should render the element correctly", () => {
//     render(<TestTwoComponent />);
//     // const element = screen.getByDisplayValue("Modern testing");
//     // const element = screen.getByTitle("MODERN");
//     const element = screen.getByTestId("example");
//     const element2 = screen.getByTestId("example2");
//     // const element = screen.getAllByAltText("Modern testing");
//     // const element = screen.getByText("Modern testing");
//     // const element = screen.getByPlaceholderText("Enter your username");
//     expect(element).toBeInTheDocument();
//     expect(element2).toBeInTheDocument();
//     // expect(element.src).toBe("#");
// })
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

it("should render the element correctly", () => {
    const products = ["product-1", "product-2", "product-3"];
    render(<TestTwoComponent products={products} />);
    const elements = screen.getAllByRole("listitem");
    // expect(elements).toHaveLength(3);
    expect(elements.length).toBe(3);
})

it("should render the element correctly", () => {
    render(<TestThreeComponent suffix={"Test"} />);

    const element = screen.getByText(/ern/i, {
        exact: false
    });
    // const element = screen.getByText("Mern Testing");
    // const element = screen.getByText("ern Testing", {
    //     exact: false,
    // });
    expect(element).toBeInTheDocument();
})

it("should render the element correctly", () => {
    render(<TestThreeComponent suffix={"Test"} />);

    const element = screen.getByText("Test");
    const emptyElement = screen.queryByText("Suffix yok");

    expect(emptyElement).not.toBeInTheDocument();
    expect(element).toBeInTheDocument();
})

it("should render the element correctly", async () => {
    render(<TestFourComponent />);

    const element = await screen.findByText(/Emre/i, {
        exact: false
    });

    expect(element).toBeInTheDocument();
})