import userEvent from "@testing-library/user-event";
import { render, renderHook, screen, act } from "@testing-library/react";

import App from "./app";
import { MOCK_POSTS } from "./mock";

jest.mock("./useFetch", () => {
    return {
        useFetch: () => {
            return {
                isLoading: false,
                data: MOCK_POSTS
            };
        }
    }
})

describe("<App/>", () => {
    it("should render ...", () => {
        render(<App />);
        screen.debug();
        const listItems = screen.getAllByRole("listitem");
        expect(true).toBe(true);
        expect(listItems).toHaveLength(MOCK_POSTS.length);
    })
})