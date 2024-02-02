import { render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { UserEvent, ListComponent, Mock} from "./ReactTestingLibrary"
import FirstTest from "./ReactTestingLibrary"
import { describe, it, expect, test, vi } from "vitest"

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

describe('the presence of list', () => {
    test('list contains 3 li', () => {
        render(<ListComponent/>);

        const ulEle = screen.getByRole('list');
        const liEle = screen.getAllByRole('listitem');

        expect(ulEle).toBeInTheDocument();
        expect(ulEle).toHaveClass('list')
        expect(liEle.length).toBe(3);
    })
})

describe('button click', () => {
    test('render?', () => {
        render(<Mock onClick={() => {}}/>)
        const button = screen.getByRole('button', {name : "Button"});

        expect(button).toBeInTheDocument();
    })

    test('click once', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();

        render(<Mock onClick={onClick}/>)
        const button = screen.getByRole('button', {name : "Button"});
        
        await user.click(button)

        expect(onClick).toHaveBeenCalledOnce()
    })

    test('click thrice', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();

        render(<Mock onClick={onClick}/>)
        const button = screen.getByRole('button', {name : "Button"});
        
        await user.click(button)
        await user.click(button)
        await user.click(button)

        expect(onClick).toBeCalledTimes(3)
    })

    test('no click', async () => {
        const onClick = vi.fn();
        render(<Mock onClick={onClick}/>)
        expect(onClick).not.toHaveBeenCalledOnce()
    })
})
