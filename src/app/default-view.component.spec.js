"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var default_view_component_1 = require("./default-view.component");
describe('Default View Component', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [default_view_component_1.DefaultViewComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(default_view_component_1.DefaultViewComponent);
        comp = fixture.componentInstance;
    });
    it('true should be true', function () {
        expect(true).toBe(true);
    });
});
