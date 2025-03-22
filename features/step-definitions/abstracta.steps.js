const { Given, When, Then } = require('@wdio/cucumber-framework');
const HOME_PAGE_FRAME = require('../pageobjects/abstracta/home/homePageFrame')
const HOME_PAGE_ELEMENTS = require('../pageobjects/abstracta/home/homePageElements')

Given('I open the web navigator and enter url', async () => {
    await HOME_PAGE_FRAME.enterWebsite();
    await HOME_PAGE_FRAME.assertHomeLogo();
});

When('I search a product in searchbox', async () => {
    await HOME_PAGE_FRAME.searchAProduct('iphone')
});

When('I selected the first option', async () => {

})