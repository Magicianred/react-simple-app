import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import WhoAre from "./../../../Components/Pages/WhoAre";

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

describe("WhoAre Component", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<WhoAre />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    describe("Check content elements", () => {
        it("Render Component", () => {
            act(() => {
                render(<WhoAre />, container);
            });
            expect(container.querySelector("h2").textContent).toBe("Who Are");
            expect(container.querySelector("p").textContent).toBe("This is the who are page");
        });
    });
});