import React from 'react';
import { create } from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import Footer from './../../../Components/Partials/Footer'

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

describe("Show the Footer site", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<Footer />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show Footer site", () => {
        act(() => {
            render(<Footer />, container);
        });
        expect(container).not.toBe(null);
        expect(container.querySelector("footer").textContent).not.toBe(undefined);
    });
    
});