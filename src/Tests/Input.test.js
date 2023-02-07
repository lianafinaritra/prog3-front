import React from "react";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Components/Input";
import renderer from "react-test-renderer";

describe('Input test', () => {
    const handleLoad = jest.fn();

    it('renders inputs element', () => {
        const { getByTestId } = render(<Input value={""} handleLoad={handleLoad} />);
        expect(getByTestId('input-container')).toBeInTheDocument();
        expect(getByTestId('input')).toBeInTheDocument();
        expect(getByTestId('submit')).toBeInTheDocument();
    });

    it('write new todo', () => {
        const { getByTestId } = render(<Input value={""} handleLoad={handleLoad} />)

        const newTask = 'new task';
        const input = getByTestId("input");
        expect(input.value).toBe("");
        userEvent.type(input, newTask);
        expect(input.value).toBe(newTask);
    });

    it('call handleLoad when click on the button', () => {
        const { getByTestId } = render(<Input value={""} handleLoad={handleLoad} />);

        const submit = getByTestId('submit');
        userEvent.click(submit);
        expect(handleLoad).toHaveBeenCalled();
    });

    it("should renders correctly", ()=>{
        const inputSnap = renderer.create(
            <Input value={""} handleLoad={(e) => e.preventDefault()} />
        )

        const input = inputSnap.toJSON();
        expect(input).toMatchSnapshot();
    })
});
