 export class Homepage {

    visit() {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    }

    clickBankManagerLoginButton() {
        cy.contains("Bank Manager Login").click();
    }

    clickCustomerLoginButton() {
        cy.contains("Customer Login").click();
    }

    elements = {

        bankManagerLoginButton: () => cy.get(":nth-child(3) > .btn"),
       customerLoginButton: () => cy.get(":nth-child(4) > .btn")
    }

}

