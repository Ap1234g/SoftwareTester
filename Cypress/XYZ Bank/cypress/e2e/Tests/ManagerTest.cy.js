import { BankManager } from '../Pages/BankManager'
import { Homepage } from '../Pages/Homepage'

const bankManager = new BankManager();
const homepage = new Homepage();

describe("XYZ Bank - Bank Manager", () => {
  let customers;

  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

    cy.fixture("customer").then((data) => {
      customers = data;
    });


cy.url().should('include', '/login');
    homepage.clickBankManagerLoginButton();
    
  });


   afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window().then((win) => {
            win.sessionStorage.clear();
            bankManager.clickHomeButton();
        });
    });

  it("should add multiple customers", () => {
    customers.forEach((customer) => {
      bankManager.clickAddCustomerButton();
      bankManager.enterFirstName(customer.firstName);
      bankManager.enterLastName(customer.lastName);
      bankManager.enterPostalCode(customer.postalCode);
      bankManager.clickAddCustomer();

      cy.once('window:alert', (text) => {
        expect(text).to.match(/Customer added successfully with customer id :\d+/);
      });


    });

      //open account for each customer
      customers.forEach((customer) => {
        bankManager.clickOpenAccountButton();
        bankManager.selectCustomerName(`${customer.firstName} ${customer.lastName}`);
        bankManager.selectCurrency(customer.currency);
        bankManager.clickProcessButton();
      });
     
      cy.once('window:alert', (text) => {
        expect(text).to.contain('Account created successfully');
      });

       bankManager.clickCustomersButton();
      bankManager.searchCustomername(customers[0].firstName);
      bankManager.deleteCustomer();

    });

     // Negative tests

    describe("XYZ Bank - Bank Manager - Negative tests", () => {

      let customers0;

      beforeEach(() => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

        cy.fixture("customer0").then((data) => {
          customers0 = data;
        });

        homepage.clickBankManagerLoginButton();
      });

      
afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window().then((win) => {
            win.sessionStorage.clear();
            bankManager.clickHomeButton();
        });
    });


    // Add customer with empty field ,number in name and surname, postal code character


  it("should add multiple customers with empty field, characters and numbers", () => {
    customers0.forEach((customer) => {
      bankManager.clickAddCustomerButton();
      bankManager.enterFirstName(customer.firstName);
      bankManager.enterLastName(customer.lastName);
      bankManager.enterPostalCode(customer.postalCode);
      bankManager.clickAddCustomer();

      cy.once('window:alert', (text) => {
        expect(text).to.match(/Customer added successfully with customer id :\d+/);
      });


    });

      //open account for each customer
      customers0.forEach((customer) => {
        bankManager.clickOpenAccountButton();
        bankManager.selectCustomerName(`${customer.firstName} ${customer.lastName}`);
        bankManager.selectCurrency(customer.currency);
        bankManager.clickProcessButton();
      });
     
      cy.once('window:alert', (text) => {
        expect(text).to.contain('Account created successfully');
      });

       bankManager.clickCustomersButton();
      bankManager.searchCustomername(customers[0].firstName);
      bankManager.deleteCustomer();

    });



    // Edge testing

describe("XYZ Bank - Bank Manager - Edge Testing", () => {

      let customers1;

      beforeEach(() => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

        cy.fixture("customer1").then((data) => {
          customers1 = data;
        });

        homepage.clickBankManagerLoginButton();
      });

      
afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window().then((win) => {
            win.sessionStorage.clear();
            bankManager.clickHomeButton();
        });
    });
    // max and min characters , leading and trailling space and Mixed cases

  it("add using max,min,leading,trailling and mixed cases", () => {
    customers1.forEach((customer) => {
      bankManager.clickAddCustomerButton();
      bankManager.enterFirstName(customer.firstName);
      bankManager.enterLastName(customer.lastName);
      bankManager.enterPostalCode(customer.postalCode);
      bankManager.clickAddCustomer();

      cy.once('window:alert', (text) => {
        expect(text).to.match(/Customer added successfully with customer id :\d+/);
      });


    });

        // search and delete 
       bankManager.clickCustomersButton();
      bankManager.searchCustomername(customers[0].firstName);
  

    });


    // Risk-Based Testing 

describe("XYZ Bank - Bank Manager - Risk Testing", () => {

     // let customers2;

      beforeEach(() => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

       // cy.fixture("customer2").then((data) => {
       //   customers2 = data;
      //  });

        homepage.clickBankManagerLoginButton();
      });

      
afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.window().then((win) => {
            win.sessionStorage.clear();
           
        });
    });
    // duplicate customer ,rapid clicking and refresh during data entry

  it("duplicate customers", () => {
    
              // First Customer
    bankManager.enterFirstName("Linda");
    bankManager.enterLastName("Zany");
    bankManager.enterPostalCode("5634");

    cy.once("window:alert", (text) => {
        expect(text).to.contain("Customer added successfully");
    });

    bankManager.clickAddCustomer();

    // Duplicate Customer
    bankManager.enterFirstName("Linda");
    bankManager.enterLastName("Zany");
    bankManager.enterPostalCode("5634");

    cy.once("window:alert", (text) => {
        expect(text).to.contain("Customer added successfully");
    });

    bankManager.clickAddCustomer();

      // search using lower and partial case , search deleted customer 
       bankManager.clickCustomersButton();
     bankManager.searchCustomername("linda");
     bankManager.searchCustomername("LinDa");
     bankManager.clickHomeButton();

});
 });

       
  

    });


  });

    });

