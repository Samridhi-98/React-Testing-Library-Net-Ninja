import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';


const mockSetTodos = jest.fn();

describe('AddInput', () => {
    it('should render input element', () => {
        render(<AddInput
            todos={[]}
            setTodos={mockSetTodos}
        />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type input', () => {
        render(<AddInput
            todos={[]}
            setTodos={mockSetTodos}
        />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Coding" } })

        expect(inputElement.value).toBe("Coding");
    });

    it('should be able to click button', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockSetTodos}
            />
        );

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, { target: { value: "Coding" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement);

        expect(mockSetTodos).toBeCalled();
    });

    it('should have empty value when button is clicked', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockSetTodos}
            />
        );

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, { target: { value: "Coding" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe("");
    });
})