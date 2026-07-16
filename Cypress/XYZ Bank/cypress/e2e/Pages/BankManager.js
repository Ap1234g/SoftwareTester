 export class BankManager {

//Element locators for Manager page

   clickAddCustomerButton() {
 cy.get('[ng-class="btnClass1"]').click();

   }

enterFirstName(firstName) {
        this.elements.firstName().type(firstName)
        .clear()
        .type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastName().type(lastName)
        .clear()
        .type(lastName);
    }

    enterPostalCode(postalCode) {
        this.elements.postalCode().type(postalCode)
        .clear()
        .type(postalCode);
    }

    clickAddCustomer() {
        this.elements.submitCustomerBtn().click();
    }

    clickCustomersButton() {
       this.elements.customersBtn().click();
    }

    clickOpenAccountButton() {
    this.elements.openAccountBtn().click();
}

selectCustomerName(customerName) {
    this.elements.customerDropdown().select(customerName)
       ;
}

selectCurrency(currency) {
    this.elements.currencyDropdown().select(currency)
        ;
}

clickProcessButton() {
    this.elements.processBtn().click();
}



 elements = {
       searchBox: () => cy.get('input[placeholder="Search Customer"]')
   }

   searchCustomername(customername) {
      this.elements.searchBox()
           .clear()
            .type(customername);
   }

deleteCustomer() {
    this.elements.deleteBtn().click();
}

clickHomeButton() {
    this.elements.homeBtn().click();
}

elements = {
    addCustomerBtn: () => cy.get('[ng-class="btnClass1"]'),
    firstName: () => cy.get(':nth-child(1) > .form-control'),
    lastName: () => cy.get(':nth-child(2) > .form-control'),
    postalCode: () => cy.get(':nth-child(3) > .form-control'),
    submitCustomerBtn: () => cy.get('[name="myForm"] > .btn'),
    openAccountBtn: () => cy.get('[ng-class="btnClass2"]'),
    customerDropdown: () => cy.get('[name="userSelect"]'),
    currencyDropdown: () => cy.get('[name="currency"]'),
    processBtn: () => cy.get('[name="myForm"] > button'),
    customersBtn: () => cy.get('[ng-class="btnClass3"]'),
    searchBox: () => cy.get('input[placeholder="Search Customer"]'),
    deleteBtn: () => cy.get(':nth-child(5) > button'),
    homeBtn: () => cy.get('.home')
}

}