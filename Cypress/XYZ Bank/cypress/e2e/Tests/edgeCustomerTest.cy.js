import { Homepage } from "../Pages/Homepage";
import { Customer } from "../Pages/Customer";

const homepage = new Homepage()
const customer = new Customer()


describe('edge cases' , () => {


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

  it('not allow deposit 0' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("0");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })

 it('not allow deposit a decimal number ' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("56.89");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })


   it('not allow deposit a larger number' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("986346234837647858972354784735435597871532345661324678");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })

   it('not allow deposit lending 0' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("045678");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })

   it('not allow deposit 0,' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("0.563456");
     customer.clickDepositButton();
     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })

})