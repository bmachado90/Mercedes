import { When, Then } from 'cypress-cucumber-preprocessor/steps'


When('I visit the url', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get("div > div > div.cmm-cookie-banner__content > cmm-heading-section", { includeShadowDom: true },{ timeout: 30000 }).should("be.visible")            
})

When('I close the cookies', () => {
    cy.get("div > div > div.cmm-cookie-banner__content > cmm-buttons-wrapper > div > div > button.wb-button.wb-button--primary.wb-button--small.wb-button--accept-all",{ includeShadowDom: true }).click({ force: true })
    cy.wait(1000)
})

When('I click on Our Cars', () => {    
    cy.get("header > div > nav.owc-header__header-navigation > div > ul > li.owc-header-navigation-topic.owc-header-navigation-topic--desktop-nav.owc-header-navigation-topic__model-flyout > button > p"
    ,{ includeShadowDom: true }).click({ force: true })
    cy.get("header > div > nav.owc-header__header-navigation > div > ul > li.owc-header-navigation-topic.owc-header-navigation-topic--desktop-nav.owc-header-navigation-topic__model-flyout.owc-header-navigation-topic--selected > div > div.owc-header-flyout__innerContent > div.owc-header-flyout__inner-content-title"
    ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")  
})

When('I select Model {string}', (string) => {
    cy.get("#app-vue > div > ul > li:nth-child(2) > ul > li:nth-child(1) > div > p", { includeShadowDom: true },{ timeout: 30000 }).should("be.visible")  
    var t6
     cy.get("#app-vue > div > ul > li:nth-child(2) > ul > li:nth-child(1) > div > p",{ includeShadowDom: true }).should(($t) => {
         t6 = $t.text();
     expect(t6).equals(string);    
    })
    cy.get("#app-vue > div > ul > li:nth-child(2) > ul > li:nth-child(1) > div > p", { includeShadowDom: true },{ timeout: 30000 }).click({ force: true })
})

When('I select the class {string}', (string) => {
    cy.get("div > div.owc-header-flyout__topbar > div", { includeShadowDom: true },{ timeout: 30000 }).should("be.visible")  
    var t6
    cy.get("#app-vue > div > owc-header-flyout > ul > li > ul > li:nth-child(1) > a > p",{ includeShadowDom: true }).should(($t) => {
        t6 = $t.text();
    expect(t6).contains(string);    
    })
    cy.get("#app-vue > div > owc-header-flyout > ul > li > ul > li:nth-child(1) > a > p", { includeShadowDom: true },{ timeout: 30000 }).click({ force: true })
    cy.get(".stage__imgWrapper",{ timeout: 30000 }).should("be.visible")    

})

When('I click on {string}', (string) => {
    cy.get(".nbaElement__link",{ timeout: 30000 }).eq(0).should("be.visible")
    cy.get(".nbaElement__link").eq(0).invoke('removeAttr', 'target')
    cy.get(".nbaElement__link").eq(0).click({ force: true })
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-comparison > div > div > div:nth-child(1) > wb-card"
    ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")  
})

When('I Filter by {string}', (string) => {
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > button"
    ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")  
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > button"
    ,{ includeShadowDom: true }).click({ force: true })
    cy.wait(1000)  
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > div > div > wb-checkbox-control:nth-child(1) > label"
    ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")
    
    var t6
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > div > div > wb-checkbox-control:nth-child(1) > label",{ includeShadowDom: true }).should(($t) => {
        t6 = $t.text();
    expect(t6).contains(string);
    })       
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > div > div > wb-checkbox-control:nth-child(1) > label > input",
    { includeShadowDom: true }).click({ force: true })
    cy.wait(1000)
})

When('I Close the Filter', () => {
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__primary > div.cc-motorization-filters-form__primary-filters.ng-star-inserted > cc-motorization-filters-primary-filters > div > fieldset > wb-multi-select-control > button"
    ,{ includeShadowDom: true }).click({ force: true })
})

When('i Take a Screenshot', () => {    
    cy.screenshot({ capture: 'fullPage' })
    cy.wait(1000)
})

When('I Choose Filter Lowest firt', () => {      
   cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__sorting.ng-star-inserted > cc-motorization-filters-sorting > wb-select-control > wb-select > select"
   ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")                 
   cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__sorting.ng-star-inserted > cc-motorization-filters-sorting > wb-select-control > wb-select > select"
   ,{ includeShadowDom: true }).select('Price (lowest first)',{ force: true })   
       
})

When('I Save the lowest price results in a text file', () => {
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-comparison > div > div > div:nth-child(1) > wb-card > div.cc-motorization-comparison-header-wrapper > cc-motorization-header > div > div > div.wb-type-copy-strong.cc-motorization-header__price.cc-text.ng-star-inserted"
     ,{ includeShadowDom: true }).then(function($elem) {
        cy.log($elem.text()) 
    cy.writeFile('cypress/TXTFile/message.txt', "Lowest Price: "+$elem.text()+"\n",{ flag: 'a+' })
    })    
})

When('i Choose filter Highest first', () => {
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__sorting.ng-star-inserted > cc-motorization-filters-sorting > wb-select-control > wb-select > select"
    ,{ includeShadowDom: true },{ timeout: 30000 }).should("be.visible")                 
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-filters > cc-motorization-filters-form > form > div > div.cc-motorization-filters-form__sorting.ng-star-inserted > cc-motorization-filters-sorting > wb-select-control > wb-select > select"
    ,{ includeShadowDom: true }).select('Price (highest first)',{ force: true })   
})

When('I save the highest price results in a text file', () => {
    cy.get("#cc-app-container-main > div.cc-app-container__main-frame.cc-grid-container > div.cc-grid-container.ng-star-inserted > div > div:nth-child(2) > cc-motorization > cc-motorization-comparison > div > div > div:nth-child(1) > wb-card > div.cc-motorization-comparison-header-wrapper > cc-motorization-header > div > div > div.wb-type-copy-strong.cc-motorization-header__price.cc-text.ng-star-inserted"
     ,{ includeShadowDom: true }).then(function($elem) {
        cy.log($elem.text()) 
    cy.writeFile('cypress/TXTFile/message.txt', "Highest Price: "+$elem.text(),{ flag: 'a+' })
    })   
})

