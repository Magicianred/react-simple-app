import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import NotFound from "./../../../Components/Pages/NotFound";

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

describe("NotFound Component", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<NotFound />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    describe("Check content elements", () => {
        it("Render Component", () => {
            act(() => {
                render(<NotFound />, container);
            });
            expect(container.querySelector("h2").textContent).toBe("404 Page not found");
            expect(container.querySelector("p").textContent).toBe("The page is not found");
        });
    });
});