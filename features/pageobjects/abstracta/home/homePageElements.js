module.exports = {
    get getLogoImage() { return $('#logo') },
    get getSearchBox() { return $('//input[@placeholder="Search"]')},
    get getSearchButton() { return $([
        '[id="search"]',
        'button[type="button"]'
    ].join(','));
    },
    
};