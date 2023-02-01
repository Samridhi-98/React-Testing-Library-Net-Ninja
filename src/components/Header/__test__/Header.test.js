import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render text passed as prop to header', () => {
    render(<Header title="TODO" />);  //ARRANGE

    const HeaderElement = screen.getByText(/todo/i);   //ACT

    expect(HeaderElement).toBeInTheDocument();   //ASSERT
});