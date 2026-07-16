import { Homepage } from "../Pages/Homepage";
import { Customer } from "../Pages/Customer";

const homepage = new Homepage()
const customer = new Customer()

describe('Negative', () => {


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

    it('should not allow negative amount ot be withdrawn', () =>{


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
     customer.enterAmount("-600");
     customer.clickWithdrawButton();
     customer.clickTransactions();
   
    })


 it('should not allow to withdraw more  amount', () =>{


        customer.YourNameDropDown("Harry Potter");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("6000");
     customer.clickDepositButton();
     cy.contains('Withdraw').should('be.visible');
     customer.clickWithdraw();
     customer.enterAmount("78000");
     customer.clickWithdrawButton();
    // cy.contains('Transaction Failed. You can not withdraw amount more than the balance.').should('be.visible')
     customer.clickTransactions();
 


 })

 it('should not allow characters and numbers and special characters to be deposited', () =>{


        customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("875#t%");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();
    
 })



  it.only('should not allow empty string', () =>{


        customer.YourNameDropDown("Harry Potter");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("");
     customer.clickDepositButton();
     cy.contains('Withdraw').should('be.visible');
     customer.clickWithdraw();
     customer.enterAmount("5600");
     customer.clickWithdrawButton();
     customer.clickTransactions();
   

  })

})