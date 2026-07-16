import { Homepage } from "../Pages/Homepage";
import { Customer } from "../Pages/Customer";

const homepage = new Homepage()
const customer = new Customer()

describe('customer positive test' , () => {

    beforeEach(() => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

    cy.url().should('include', '/login');
    homepage.clickCustomerLoginButton();

    })

   afterEach(() => {
       cy.clearCookies();
       cy.clearLocalStorage();

       cy.window().then((win) => {
            win.sessionStorage.clear();       
   });
    });

    
  it(" perform bank functions", () =>{

     customer.YourNameDropDown("Harry Potter");
     customer.clickLogin();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();
     customer.clickBack();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("6000");
     customer.clickDepositButton();
     cy.contains('Withdraw').should('be.visible');
     customer.clickWithdraw();
     customer.enterAmount("5600");
     customer.clickWithdrawButton();
     customer.clickTransactions();
     customer.clickLogout()
   


  });


  
});



