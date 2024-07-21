"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.getPage = exports.initializePage = exports.initializeBrowser = void 0;
const playwright_1 = require("playwright");
let browser = null;
let page = null;
const DEFAULT_TIMEOUT = 30000;
const initializeBrowser = async () => {
    if (!browser) {
        browser = await playwright_1.chromium.launch({ headless: false });
    }
};
exports.initializeBrowser = initializeBrowser;
const initializePage = async () => {
    if (browser && !page) {
        page = await browser.newPage();
        page.setDefaultTimeout(DEFAULT_TIMEOUT);
    }
};
exports.initializePage = initializePage;
const getPage = () => {
    if (!page) {
        throw new Error('Page has not been initialized. Please call initializePage first.');
    }
    return page;
};
exports.getPage = getPage;
const closeBrowser = async () => {
    if (browser) {
        await browser.close();
        browser = null;
        page = null;
    }
};
exports.closeBrowser = closeBrowser;
