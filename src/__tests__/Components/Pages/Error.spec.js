import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';

import NotFound from "./../../../Components/Pages/NotFound";
import App from "./../../../Components/App";

Enzyme.configure({ adapter: new Adapter() });
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Show the Error page", () => {
    let wrapper;
    const defaultProps = {
    };

    beforeEach(() => {
      // render the component once up here in this block. It runs before each test.
      wrapper = shallow(<App {...defaultProps} />);
    });

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<NotFound />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show Error page", () => {
        act(() => {
            render(<NotFound />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });

});