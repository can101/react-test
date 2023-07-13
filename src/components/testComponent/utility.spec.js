import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event";


function Utility() {
    return (
        <div>
            {/* <select multiple>
                <option value={"123"}>Elma</option>
                {/* <option value={"elma"}>Elma</option> */}
            {/* <option value={"armut"}>Armut</option> */}
            {/* <option value={"ayva"}>Ayva</option> */}
            {/* </select> */}
            <input />
        </div>
    )
}


it("should render the element correctly", async () => {
    const user = userEvent.setup();
    render(<Utility />);
    // const fruits=screen.getByRole('listbox');
    // // await user.selectOptions(fruits,"Elma");
    // await user.selectOptions(fruits,["Elma","armut","123"]);
    // expect(screen.getByRole("option",{name:"Elma"}).selected).toBe(true)
    // expect(screen.getByRole("option",{name:"Armut"}).selected).toBe(true)
    // expect(screen.getByRole("option",{name:"Ayva"}).selected).toBe(false)

    // await user.deselectOptions(fruits,"123")
    // expect(screen.getByRole("option",{name:"Elma"}).selected).toBe(false)

    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, "heyy");
    expect(inputElement).toHaveValue("heey")

})