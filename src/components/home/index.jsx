import React from "react";
import { di } from 'react-magnetic-di';

export function Listing() {
    return (
        <>
            <div>start</div>
        </>
    )
}

// export default function Home({ ListingComponent = Listing }) {
export default function Home() {
    di(Listing);
    return (
        <>
            <div>start</div>
            <Listing />
            {/* <ListingComponent /> */}
            <div>end</div>
        </>
    )
}