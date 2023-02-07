import React from "react";
import {render} from "@testing-library/react";
import Todo from "../Components/Todo";

describe('Todo test', () => {
    it('show todo', () => {
        const { getByTestId } = render(
            <Todo />
        )

        expect(getByTestId("header")).toBeTruthy();
        expect(getByTestId("input-container")).toBeTruthy();
        expect(getByTestId("list-container")).toBeTruthy();
    });
});
