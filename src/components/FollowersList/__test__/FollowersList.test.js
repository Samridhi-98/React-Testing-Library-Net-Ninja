import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList title="header" />
        </BrowserRouter>
    )
}

describe('Async Request', () => {

    beforeEach(() => {  //? RUN BEFORE EACH TEST
        jest.mock("../../../__mocks__/axios");
    })

    beforeAll(() => {   //? RUN ONCE BEFORE ALL TEST
        jest.mock("../../../__mocks__/axios");
    })

    afterAll(() => {    //? RUN ONCE AFTER ALL TEST
        jest.clearAllMocks();
    })

    afterEach(() => {   //? RUN AFTER EACH TEST
        jest.clearAllMocks();
    })

    it('should fetch and render element', async () => {
        render(<MockFollowersList />);

        const followerDivElement = await screen.findByTestId("follower-item-0");

        expect(followerDivElement).toBeInTheDocument();

    })

    it('should fetch and render multiple element', async () => {
        render(<MockFollowersList />);

        const followerDivElement = await screen.findAllByTestId(/follower-item/i);

        expect(followerDivElement.length).toBe(2);

    })
})