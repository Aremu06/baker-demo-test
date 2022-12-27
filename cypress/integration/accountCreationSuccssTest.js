/// <reference types="Cypress" />
import userdata from '../fixtures/testdata.json'

describe('Account Creation Success Test', function(){

  it('Should load the Url and open PARA BANK HomePage!', function()  {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
})
    it('clicking "register" navigates to a new url!', function()  {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get('#loginPanel > :nth-child(3) > a').click();
    //cy.url().should('include', '/parabank/register');

  })
    it('Should fill registration form!', function(){
        cy.visit("https://parabank.parasoft.com/parabank/register.htm;jsessionid=A7F0759AA72F9CE0002AD4A73BF92F0C");
        cy.get('input[id="customer.firstName"]').type(userdata.firstName)
        cy.get('input[id="customer.lastName"]').type(userdata.lastName)
        cy.get('input[id="customer.address.street"]').type(userdata.address);
        cy.get('input[id="customer.address.city"]').type(userdata.city);
        cy.get('input[id="customer.address.state"]').type(userdata.state);
        cy.get('input[id="customer.address.zipCode"]').type(userdata.zipCode);
        cy.get('input[id="customer.ssn"]').type(userdata.sSN);
        cy.get('input[id="customer.username"]').type(userdata.userName);
        cy.get('input[id="customer.password"]').type(userdata.password);
        cy.get('input[id="repeatedPassword"]').type(userdata.confirm);
        cy.get('input[value="Register"]').click();
    })
 })