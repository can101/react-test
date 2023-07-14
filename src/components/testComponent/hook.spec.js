import { render, renderHook, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { act } from "react-dom/test-utils";


function useCustomHook() {
    const [name, setName] = useState("Mehmet");
    const changeName = (newValue) => {
        setName(newValue);
    }
    return { name, changeName }
}


it("should click", async () => {
    const { result } = renderHook(useCustomHook);
    expect(result.current.name).toBe("Mehmet");
   await act(
        () => {

            result.current.changeName("Can");
        }
    )
    expect(result.current.name).toBe("Can");
})