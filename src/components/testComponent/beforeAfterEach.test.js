import { render, renderHook, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { useState } from "react";
import { act } from "react-dom/test-utils";

class DatabaseClient {
    constructor() {
        this.users = [];
    }
    initilaze() {
        this.users = [
            { id: 1, name: "emre" },
            { id: 2, name: "derya" },
        ]
    }
    getUsers() {
        return this.users;
    }
    getUser(id) {
        return this.users.find((user) => user.id === id);
    }
    deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }
    reset() {
        this.users = [];
    }
}


describe("Database Client", () => {
    let dbclient;
    beforeEach(() => {
        dbclient = new DatabaseClient()
        dbclient.initilaze();
    })
    // afterEach(() => {
    //     console.log("after each");
    // })
    it("should initialze with two users", () => {
        // const dbclient = new DatabaseClient()
        // dbclient.initilaze();
        const users = dbclient.getUsers();
        expect(users.length).toBe(2);
        expect(users).toMatchObject([
            { id: 1, name: "emre" },
            { id: 2, name: "derya" },
        ])
    });
    it("should delete a user", () => {
        // const dbclient = new DatabaseClient()
        // dbclient.initilaze();
        dbclient.deleteUser(1)
        const user = dbclient.getUser(1);
        expect(user).toBeFalsy();
    });
    it("should get a user", () => {
        // const dbclient = new DatabaseClient()
        // dbclient.initilaze();
        const user = dbclient.getUser(1);
        expect(user).toMatchObject({ id: 1, name: "emre" })
    });
})