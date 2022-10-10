import homeSaucePage from '../../pages/saucedemo/homeSaucePage'
import inventoryPage from '../../pages/saucedemo/inventoryPage'

describe('POM Implementation', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')  
    });

// TC - 01 (Happy path)

    it('should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    });

// TC - 02

    it('should display locked out message', () => {
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

   
// TC - 03   

    it('should display incorrect username message', () => {
        homeSaucePage.typeUsername('dummyUsername');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

// TC - 04    

    it('should display incorrect password message', () => {
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('dummyPassword');
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

});


// En homeSauceFixture.spec.js | Se implementa la misma funcionalidad 
//  con mejores practicas y reduciendo la cantidad de código.