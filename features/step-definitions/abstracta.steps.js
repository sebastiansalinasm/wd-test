const { Given, When, Then } = require('@wdio/cucumber-framework');
const HOME_PAGE_ELEMENTS = require('../pageobjects/abstracta/home/homePageElements')

Given('I open the web navigator and enter url', async () => {
    await browser.url(`http://opencart.abstracta.us`);
    await expect(HOME_PAGE_ELEMENTS.getLogoImage).toBeDisplayed()
});

When('I search a product in searchbox', async () => {

});

When('I selected the first option', async () => {

})