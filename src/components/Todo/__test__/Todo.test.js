import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';


const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(() => {
        fireEvent.change(inputElement, { target: { value: "Coding" } });
        fireEvent.click(buttonElement);
    })

}
describe('Integration Todo', () => {
    it('should be able to add todo', () => {
        render(<MockTodo />);

        addTask(["Coding"]);
        const divElement = screen.getByText(/Coding/i);

        expect(divElement).toBeInTheDocument();

    })

    it('should be ble to add multiple todo', () => {
        render(<MockTodo />);

        addTask(["Coding", "Finish Breakfast", "Go on walk", "Prepare presentation"]);
        const divElement = screen.getAllByTestId("task-container");

        expect(divElement.length).toBe(4);

    })

    it('task should not have complete class when initally rendered', () => {
        render(<MockTodo />);

        addTask(["Coding"]);
        const divElement = screen.getByText(/Coding/i);

        expect(divElement).not.toHaveClass("todo-item-active");

    })

    it('task should have complete class when clicke', () => {
        render(<MockTodo />);

        addTask(["Coding"]);
        const divElement = screen.getByText(/Coding/i);
        fireEvent.click(divElement);

        expect(divElement).toHaveClass("todo-item-active");

    })

})