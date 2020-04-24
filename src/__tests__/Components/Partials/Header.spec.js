import React from 'react';
import { create } from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import Header from './../../../Components/Partials/Header'

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

describe("Show the Header site", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<Header />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
        it("Matches the snapshot (with title: 'My App Title')", () => {
            const instance = create(<Header title="My App Title" />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    xit("Show Header site", () => {
        act(() => {
            render(<Header />, container);
        });
        expect(container).not.toBe(null);
        expect(container.querySelector("header").textContent).not.toBe(undefined);
    });
});