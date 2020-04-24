import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow, mount } from 'enzyme'
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import Header from "./../../Components/Partials/Header";
import Footer from "./../../Components/Partials/Footer";

import App from "./../../Components/App";

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

describe("Startup the application", () => {
    let wrapper;
    const defaultProps = {
    };

    beforeEach(() => {
      // render the component once up here in this block. It runs before each test.
      wrapper = shallow(<App {...defaultProps} />);
    });

    it("Show home page as start page", () => {
        act(() => {
            render(<App />, container);
        });
        expect(container.querySelector("h2").textContent).toBe("Home page");
        expect(container.querySelector("p").textContent).toBe("This is the home page");
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