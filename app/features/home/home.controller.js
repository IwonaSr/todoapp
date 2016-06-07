export default class HomeController {

 constructor(HomeService) {
 
    'use strict';
    this.HomeService = HomeService;
    this.email = HomeService.getEmailFromLocalStorage();
    // this.$scope.newTodo = '';
    // this.$scope.todos = HomeService.todos;
    this.title = 'To do';
    this.todos = HomeService.todos; 
    this.completed = false;
 }
  login() {
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
  logout() {
    this.email = null;
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
  test() {
    alert('test2');
  }

 //test  
  // addTitle()
  // {
  //   return this.title;
  // }
  
  
  //dziala
  AddTask()
  {
    var email = this.HomeService.getEmailFromLocalStorage();
    
    
    if(email !== null){
    var todo = {title: this.title, email: email, completed: false};
    
    alert(todo.email);
     this.HomeService.connectToFireBase(todo);
    }
    else
    {
        alert('Not logged');
    }
  }
  
  //niepotrzebne
  // getTask()
  // {
  //   // this.data = this.HomeService.getDataFromFireBase();
  //   alert(this.todos);

  // }
  
  //do zrobienia
  doneTask(todo)
  {
      todo.completed = true;
      this.HomeService.updateFireBase(todo);
      
	}
  
  
  
  //dziala
  login() {
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
  //dziala
  logout() {
    this.email = null;
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
 
  

}