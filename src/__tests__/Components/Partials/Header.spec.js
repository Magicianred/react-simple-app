import React from 'react';
import { create } from 'react-test-renderer';

import Header from './../../../Components/Partials/Header'

describe("Header Partials Component", () => {

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

    
});