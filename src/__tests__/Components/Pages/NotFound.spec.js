import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

import SiteRoutes from "./../../../Components/Sections/SiteRoutes";
import NotFound from "./../../../Components/Pages/NotFound";
import App from "./../../../Components/App";
import Header from "./../../../Components/Partials/Header";
import Footer from "./../../../Components/Partials/Footer";

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

describe("Show the Not Found page", () => {
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

    it("Show Not Found page", () => {
        act(() => {
            render(<NotFound />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });

    it("Show Not Found page with invalid path", () => {
        render(
            <MemoryRouter initialEntries={["/", "/invalidpath"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });

    it("Show Not Found page with invalid path 2", () => {
        render(
            <MemoryRouter initialEntries={["/", "/incorrectpath"]}
                initialIndex={1}>
                <SiteRoutes />
            </MemoryRouter>,
            container
        );
        expect(container.querySelector("h2").textContent).toBe("404 Page not found");
        expect(container.querySelector("p").textContent).toBe("The page is not found");
    });
        
    it("Show the header", () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(Header).length).toBe(1);
    });
    
    it("Show the site menu", () => {
        const app = mount(<App />);
        expect(app.find("div#basic-navbar-nav").length).toBe(1);
        expect(app.find("div#basic-navbar-nav a").length).toBe(6);
        // Nav.Link doesn't pass id param
        // expect(app.find("div#basic-navbar-nav a#home_link").length).toBe(1);
        // expect(app.find("div#basic-navbar-nav a#about_link").length).toBe(1);
        // expect(app.find("div#basic-navbar-nav a#contact_link").length).toBe(1);
    });
    
    it("Show the site footer", () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(Footer).length).toBe(1);
    });

});