import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

test('should render no of incomplete task', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);

    const paragraphElement = screen.getByText(/2 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
});

describe('testing multiple assertions', () => {
    it('should render 1 incomplete task', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);

        const paragraphElement = screen.getByText(/1 task left/i);

        expect(paragraphElement).toBeTruthy();
    })

    it('should render two incomplete task', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={2} />);

        const paragraphElement = screen.getByText(/2 tasks left/i);

        expect(paragraphElement).not.toBeFalsy();
    })
    describe('should render text element', () => {
        it('should render text element', () => {
            render(<MockTodoFooter numberOfIncompleteTasks={1} />);

            const paragraphElement = screen.getByText(/1 task left/i);

            expect(paragraphElement).toHaveTextContent("1 task left");
        })
    })
})