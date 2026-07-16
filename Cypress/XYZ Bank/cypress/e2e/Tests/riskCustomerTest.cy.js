import { Homepage } from "../Pages/Homepage";
import { Customer } from "../Pages/Customer";

const homepage = new Homepage()
const customer = new Customer()

describe('Risk testing', () =>{




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

  it('rapidly click deposit' , () =>{


    customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
     cy.contains('Deposit').should('be.visible');
     customer.clickDeposit();
     customer.EnterAmount("677");
    
     for( let i=0 ; i < 5 ; i++ )
        customer.clickDepositButton();

     cy.contains('Transactions').should('be.visible');
     customer.clickTransactions();

  })

 it('refresh after login ' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
    cy.reload()

  })


   it.only('Logout then try browser back' , () =>{


          customer.YourNameDropDown("Albus Dumbledore");
     customer.clickLogin();
    customer.clickLogout();

  })

 

})







