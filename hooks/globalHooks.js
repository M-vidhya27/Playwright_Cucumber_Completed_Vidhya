"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
(0, cucumber_1.setDefaultTimeout)(60000);
(0, cucumber_1.Before)(async () => {
    await (0, playwrightUtilities_1.initializeBrowser)();
    await (0, playwrightUtilities_1.initializePage)();
});
(0, cucumber_1.After)(async () => {
    await (0, playwrightUtilities_1.closeBrowser)();
});
