import userdata from '../fixtures/testdata.json'

describe('Account Creation Failure Test', function(){

   it('Should load the Url and open PARA BANK HomePage!', function(){
   cy.visit("https://parabank.parasoft.com/parabank/index.htm");
   cy.get('#loginPanel > :nth-child(3) > a').click();
   cy.get('input[id="customer.firstName"]').type("firstname");

})
   it('Should shows error message when all/any of the required fields are not filled!', function(){
           cy.visit("https://parabank.parasoft.com/parabank/register.htm;jsessionid=A7F0759AA72F9CE0002AD4A73BF92F0C");
           cy.get('input[id="customer.firstName"]').type(userdata.firstName)
           cy.get('input[id="customer.lastName"]').type(userdata.lastName)
           cy.get('input[id="customer.address.street"]').type(userdata.address);
           cy.get('input[id="customer.address.state"]').type(userdata.state);
           cy.get('input[id="customer.address.zipCode"]').type(userdata.zipCode);
           cy.get('input[id="customer.ssn"]').type(userdata.sSN);
           cy.get('input[id="customer.password"]').type(userdata.password);
           cy.get('input[value="Register"]').click();

   })
})