import userEvent from "@testing-library/user-event";

it("returns undefiend by default", () => {
    const mock = jest.fn();
    let result = mock("some arg");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("some arg");
})
it("mock implementation", () => {
    const mock = jest.fn(() => "return something");

    expect(mock("some arg")).toBe("return something");
    expect(mock).toHaveBeenCalledWith("some arg");
})
it("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "return something");

    expect(mock("some arg")).toBe("return something");
    expect(mock).toHaveBeenCalledWith("some arg");
})
it("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "return something");

    expect(mock("some arg")).toBe("return something");
    expect(mock).toHaveBeenCalledWith("some arg");

    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
})
it("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("return something");

    expect(mock("some arg")).toBe("return something");
    expect(mock).toHaveBeenCalledWith("some arg");
})
it("mock promise resolution", async () => {
    const mock = jest.fn();
    mock.mockReturnValue("return something");

    const rewsult = await mock("some arg")

    expect(rewsult).toBe("return something");
    expect(mock).toHaveBeenCalledWith("some arg");
    await expect(mock("some arg")).resolves.toBe("return something");
})