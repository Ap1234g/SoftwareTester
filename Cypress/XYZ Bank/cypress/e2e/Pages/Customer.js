export class Customer{



  YourNameDropDown(yourname){
  cy.get('[name="userSelect"]').select(yourname);
 
  }

  clickLogin(){

    cy.get('[name="myForm"] > .btn').click();
  }

clickTransactions(){

   cy.get('[ng-class="btnClass1"]').click();
  }

  clickBack(){

    cy.get('.fixedTopBox > [style="float:left"]').click();
  }

  clickDeposit(){

    cy.get('[ng-class="btnClass2"]').click();
  }

    EnterAmount(amount){

        cy.get('.form-control').type(amount);
    }


    clickDepositButton(){
        cy.get('[name="myForm"] > .btn').click();
    }
    clickWithdraw(){
        cy.get('[ng-class="btnClass3"]').click();
    }

    enterAmount(amount){
        cy.get('.form-control').type(amount);
    }

    clickWithdrawButton(){

    cy.get('[name="myForm"] > .btn').click();
    }

    clickTransactions(){
        cy.get('[ng-class="btnClass1"]').click();
    }

    clickLogout(){
        cy.get('.logout').click();
    }



}