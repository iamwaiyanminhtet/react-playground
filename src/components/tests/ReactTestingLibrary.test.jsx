import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { UserEvent} from "./ReactTestingLibrary"
import FirstTest from "./ReactTestingLibrary"
import { describe, it, expect } from "vitest"

describe('test component', () => {
    it('heading', () => {
        render(<FirstTest/>)
        expect(screen.getByRole("heading", {name : "First Test"}).textContent).toMatch(/First Test/i)
    })
});

describe('User Event', () => {
    it('initial render', () => {
        const {container} = render(<UserEvent/>)
        expect(container).toMatchSnapshot()
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<UserEvent/>);
        const button = screen.getByRole('button', {name : 'Click Me'});

        await user.click(button);
        expect(screen.getByRole('main').textContent).toMatch(/radical rhinos/i);
    })
});