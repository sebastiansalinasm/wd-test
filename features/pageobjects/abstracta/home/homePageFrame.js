import HOME_PAGE_ELEMENTS from '../../abstracta/home/homePageElements'


module.exports = {

    async enterWebsite() {
        await browser.url(`http://opencart.abstracta.us`);
    },

    async assertHomeLogo() {
        await HOME_PAGE_ELEMENTS.getLogoImage.waitForDisplayed({ timeout: 3000 })
    },

    async searchAProduct(value) {
        await HOME_PAGE_ELEMENTS.getSearchBox.setValue(value)
        await HOME_PAGE_ELEMENTS.getSearchButton.click()
    }

}