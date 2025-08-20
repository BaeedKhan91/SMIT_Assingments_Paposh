
// Bank Balance Methods

let balanceo = 0;
class Balance  {
  constructor(name,accountNo,balance ) {
    this.name = name
    this.AccountNo = accountNo
    this.balance = balance
    balanceo = balance;
    
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


const admin = new Balance("baeed", "28473",80);
console.log(admin);

admin.balanceCheck()



// Todo List 

let list =[]

class TodoList {
    constructor(name,id){
        this.name = name
        this.id = id
    }
    addTasks(id,task){
        let todo = {
            id:id,
            task:task

        }
       list.push(todo)
       console.log("Successfully Added Task");
       
       // console.log(list);
       
      }
      removeTask(id){
        list = list.filter((t)=>t.id !== id)
        
        console.log("Successfully Remove Task");
        // console.log(list);
        
    }
    taskList(){
      console.log(list);
      
    }
}

const user1 = new TodoList("baeed",102)
console.log(user1);

// user1.addTasks(1,"complete the code")
// user1.addTasks(4,"complete the work")
// user1.addTasks(5,"complete the study")
// console.log(list);

// user1.removeTask(4)
// console.log(list);


//class hierarchy

class Person {
  constructor(name,email){
    this.name =name,
    this.email= email
  }
  schoolInfo(){
    console.log({
      schooltiming:"8:00am to 1:30pm",
      schooltype:"private",
      schoolfees:"2000 permonth"
    });
    
  }
}

class Student extends Person{
  constructor(name,email,rollno){
    super(name,email)
    this.roll = rollno
  }
  schoolFestivals(){
    console.log({
      EidMiladunNabiCelebration:"11 rabi-ul-awal",
      IndependenceDayCelebration:"13-Aug-2025",
      schoolAniversery:"25 August 2025"
    });
    
  }
}

class Teacher extends Student{
  constructor(name,email,subject){
    super(name,email)
    this.teacherSubject = subject
  }
  salaryManagment(){
    console.log({
      freshers:5000,
      experienceOf1to3Years:"10000 to 15000",
      experienceOf4to6Years : "20000 to 30000",
      experienceOfAbove7Years:"above 35000"

    });
    
  }
}
const student = new Student("ahmed","ahmedali@gmail.com",343478);
const person = new Person ("asad","asad123@gmail.com");
const teacher1 = new Teacher("sana","sana@123gmail.com","math");

// console.log(teacher1);
person.schoolInfo()
student.schoolFestivals()
teacher1.salaryManagment()