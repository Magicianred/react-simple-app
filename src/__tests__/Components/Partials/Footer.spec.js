import React from 'react';
import { create } from 'react-test-renderer';

import Footer from './../../../Components/Partials/Footer'

describe("Footer Partials Component", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<Footer />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    
});