import { render, screen } from "@testing-library/react";

import Notification from "./Notification";

test('render the Notification Component', () => {
    render(<Notification />);

    const texts = screen.getAllByRole('textbox');
    expect(texts.length).toBe(4);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
});