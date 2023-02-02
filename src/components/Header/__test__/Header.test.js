import { render, screen } from '@testing-library/react';
import Header from '../Header';


//? getBy: Return error for no-match/1+ match
//? findBy: Return resolved promise for match
//? queryBy: Return null if no-match, this methods can be useful for asserting an element that is not present.
//? getByAll, findByAll, queryByAll: Returns array if found 1 or more match
test('should render text passed as prop to header', () => {
    render(<Header title="TODO" />);  //ARRANGE

    const HeaderElement = screen.getByText(/todo/i);   //ACT

    expect(HeaderElement).toBeInTheDocument();   //ASSERT
});

test('should render text passed as title prop to header', async () => {
    render(<Header title="TODO" />);  //ARRANGE

    const HeaderElement = await screen.findByText(/todo/i);   //ACT

    expect(HeaderElement).toBeInTheDocument();   //ASSERT
});

test('should render text passed as title to header', () => {
    render(<Header title="TODO" />);  //ARRANGE

    const HeaderElement = screen.queryByText(/my-header/i);   //ACT

    expect(HeaderElement).not.toBeInTheDocument();   //ASSERT
});