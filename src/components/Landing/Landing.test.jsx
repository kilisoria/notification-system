import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('render the Landing component', async () => {
    const postsMocked = {
    };
    render(<Landing posts={postsMocked} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
});
