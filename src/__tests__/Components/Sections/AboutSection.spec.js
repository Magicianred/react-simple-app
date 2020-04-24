import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter, Route, Switch } from "react-router-dom";

import AboutSection from "../../../Components/Sections/AboutSection";

Enzyme.configure({ adapter: new Adapter() });

const SiteRoutesMock = () =>
    <Switch>
        <Route path="/about" component={AboutSection} />
    </Switch>

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

describe("Allowed the navigation of About Section", () => {

    it("Go to page About", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about"]}
                initialIndex={1}>
                <SiteRoutesMock>
                    <AboutSection />
                </SiteRoutesMock>
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("About Us page");
        expect(container.querySelector("p").textContent).toBe("This is the about us page");
    });

    it("Go to page Who Are", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about/whoare"]}
                initialIndex={1}>
                <SiteRoutesMock>
                    <AboutSection />
                </SiteRoutesMock>
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Who Are");
        expect(container.querySelector("p").textContent).toBe("This is the who are page");
    });

    it("Go to page Where Are", () => {
        render(
            <MemoryRouter initialEntries={["/", "/about/whereare"]}
                initialIndex={1}>
                <SiteRoutesMock>
                    <AboutSection />
                </SiteRoutesMock>
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("Where Are");
        expect(container.querySelector("p").textContent).toBe("This is the where are page");
    });
});