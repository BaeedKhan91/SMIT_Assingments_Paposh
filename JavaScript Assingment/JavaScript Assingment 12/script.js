
let balanceo = 0;
class Admin  {
  constructor(balance, role) {
    this.balance = balance
    balanceo = balance;
    this.role = role;
  }
  withdrawl(amount) {
    if (amount > balanceo) {
      console.log(`Not Enough Money in your Account!`);
    } else {
      balanceo = balanceo - amount;
   
      console.log(`Successfully Withdrawl ${amount}Rs`);
    }
  }
  deposits(amount){
    balanceo = balanceo + amount
    console.log(`Successfully Deposit ${amount}Rs`);
    
  }
  balanceCheck(){
    console.log(`Your Current Balance is ${balanceo}Rs`);
    
  }
}


const admin = new Admin(70, "admin");
console.log(admin);

admin.deposits(400)

admin.withdrawl(277)
admin.withdrawl(389);
admin.balanceCheck()


