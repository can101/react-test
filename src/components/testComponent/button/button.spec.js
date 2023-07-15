import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

// const randomFunction = () => { };
const randomFunction = jest.fn();

describe("<Button/>", () => {
    it("should call onClick function when clicked", async () => {
        const user = userEvent.setup();
        render(<Button onClick={randomFunction}>Modern Testing</Button>);

        const buttonElement = screen.getByRole("button", { name: "Modern Testing" });

        await user.click(buttonElement);

        expect(randomFunction).toBeCalled();
        expect(randomFunction).toBeCalledTimes(1);
        expect(randomFunction).toBeCalledWith("hey clicked");
    })
})