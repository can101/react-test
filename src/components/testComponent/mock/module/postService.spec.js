import React from "react";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import postService from "./post-service"
import { MOCK_POSTS } from "./mock";
// import axios from "axios";

// jest.mock("axios");
const fetch = jest.spyOn(window, "fetch");
describe("post service", () => {
    it("should render bla bla", async () => {
        // const mockResponse = {
        //     data: MOCK_POSTS
        // }
        // axios.get.mockResolvedValue(mockResponse);
        // const result = await postService.getPosts();
        // console.log(result);

        // expect(result).toHaveLength(MOCK_POSTS.length);
        // expect(result).toMatchObject(MOCK_POSTS);

        fetch.mockResolvedValue({
            json: () => {
                return Promise.resolve({
                    data: MOCK_POSTS
                })
            }
        })
        const result = await postService.getPosts();

        expect(result).toHaveLength(MOCK_POSTS.length);
        // expect(result).toHaveLength(MOCK_POSTS.length);
        expect(result).toMatchObject(MOCK_POSTS);
    })
})