import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import {customRender} from '../../test-utils'


function Utility() {
    const handleClick = () => console.log("I am a clicked.");
    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

function TestComponent() {
    const handleClick = () => console.log("I am a clicked.");
    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}


it("should click", async () => {
    const user = userEvent.setup();
    render(<Utility />);
    const buttonElement = screen.getByRole("button", { name: "click me" })
    await user.click(buttonElement)
    expect(true).toBe(true)
})


function WrapperComponent({ Children }) {
    return <div className="wrapper">{Children}</div>
}

it("Should render the element correctly", async () => {
    // render(<TestComponent />, {
    //     wrapper:WrapperComponent
    // })
    customRender(<TestComponent />)
    screen.debug()
})