import { render } from "@testing-library/react";
import Card from "../Components/Card";
import React from "react";
import  renderer  from "react-test-renderer";

let todoItem = {
  id: 1,
  text : "description",
  status : "TODO",
}

let doneItem = {
  id: 2,
  text: "description",
  status: "DONE",
};

describe('Card test', () => {
    const handleUpdate = jest.fn();

    it('show description', () => {
        const{ getByText } = render(
            <Card item={todoItem} handleUpdate={handleUpdate} key={todoItem.id}/>
        )
        expect(getByText("description")).toBeInTheDocument();
    });

    it('display checkbox when task is in TODO status', () => {
        const { getByTestId } = render(
            <Card item={todoItem} handleUpdate={handleUpdate} key={todoItem.id}/>
        );
        expect(getByTestId("checkbox")).toBeTruthy();
    });

    it("don't display checkbox when task is DONE ", () => {
        const { queryByTestId } = render(
            <Card item={doneItem} handleUpdate={handleUpdate} key={todoItem.id}/>
        );
        expect(queryByTestId("checkbox")).toBeNull();
    });

    it("should renders correctly", ()=>{
        const cardSnap = renderer.create(
            <Card item={doneItem} handleUpdate={handleUpdate} key={todoItem.id}/>
        )
        const card = cardSnap.toJSON();

        expect(card).toMatchSnapshot();
    })
});
  
