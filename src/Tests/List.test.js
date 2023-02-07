import { render } from "@testing-library/react";
import React, {useState} from "react";
import List from "../Components/List";
import renderer from "react-test-renderer";

const tabEmpty = [];

const tab = [
    {
        id: 1,
        text : "enjana",
        status : "TODO",
    }
]

describe('List test', () => {
    const handleUpdate = jest.fn();

    it('renders list elements', () => {
        const { getByTestId } = render(<List handleUpdate={handleUpdate} tab={tab} cardStatus="TODO" />);
        expect(getByTestId('list')).toBeInTheDocument();
        expect(getByTestId('cardItem')).toBeInTheDocument();
        expect(getByTestId('cardItem').textContent).toBe('enjana');
    });

    it('render anything when tab is empty', () => {
        const{ container, getByTestId } = render(
            <List handleUpdate={handleUpdate} tab={tabEmpty} cardStatus="TODO" />
        )
        expect(getByTestId("list")).toBeTruthy();
        expect(container.querySelector('.card')).toBeNull();
    });

    it('render list card when tab have item', () => {
        const{ getByTestId } = render(
            <List handleUpdate={handleUpdate} tab={tab} cardStatus="TODO" />
        )
        expect(getByTestId("list")).toBeTruthy();
        expect(getByTestId("cardItem")).toBeTruthy();
    });

    it("should renders correctly", ()=>{
        const listSnap = renderer.create(
            <List handleUpdate={handleUpdate} tab={tab} cardStatus="TODO" />
        )

        const list = listSnap.toJSON();
        expect(list).toMatchSnapshot();
    })

});

