import React from "react"
import { render } from "@testing-library/react"
import Home, { Listing } from "."
import { DiProvider, injectable } from 'react-magnetic-di';


describe("<Home/>", () => {
    it("should render bla bla", () => {
        // render(<Home ListingComponent={<div data-testid="listing" />} />);
        const mockListingComponent = () => <div data-testid="listing" />;
        const listingDi = injectable(Listing, mockListingComponent);
        render(<Home />, {
            wrapper: (props) => <DiProvider use={[listingDi]} {...props} />
        })
        // screen.debug();
        expect(screen.getByTestId("listing")).toBeInTheDocument();
    })
})