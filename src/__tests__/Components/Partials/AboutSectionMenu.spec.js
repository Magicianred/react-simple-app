import React from 'react';
import { create } from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import AboutSectionMenu from './../../../Components/Partials/AboutSectionMenu'

Enzyme.configure({ adapter: new Adapter() });

describe("Show the About Section Menu", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default params)", () => {
            const instance = create(<AboutSectionMenu />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    it("Show About Section Menu", () => {
        const app = mount(<AboutSectionMenu />);
        expect(app.find("div#about-navbar-nav").length).toBe(1);
        expect(app.find("div#about-navbar-nav a").length).toBe(3);
        // Nav.Link doesn't pass id param
        // expect(app.find("div#basic-navbar-nav a#home_link").length).toBe(1);
        // expect(app.find("div#basic-navbar-nav a#about_link").length).toBe(1);
        // expect(app.find("div#basic-navbar-nav a#contact_link").length).toBe(1);
    });
});