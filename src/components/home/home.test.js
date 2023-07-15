import React from "react"
import { render } from "@testing-library/react"
import Home from "."

describe("<Home/>", () => {
    it("should render bla bla", () => {
        render(<Home ListingComponent={<div data-testid="listing" />} />);
        screen.debug();
        expect(screen.getByTestId("listing")).toBeInTheDocument();
    })
})