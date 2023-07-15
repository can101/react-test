function Listing() {
    return (
        <>
            <div>start</div>
        </>
    )
}

export default function Home({ ListingComponent = Listing }) {
    return (
        <>
            <div>start</div>
            <ListingComponent />
            <div>end</div>
        </>
    )
}