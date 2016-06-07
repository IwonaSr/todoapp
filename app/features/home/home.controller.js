export default class HomeController {

 constructor(HomeService) {
 
    'use strict';
    this.HomeService = HomeService;
    this.email = HomeService.getEmailFromLocalStorage();
    // this.$scope.newTodo = '';
    // this.$scope.todos = HomeService.todos;
    this.title = 'To do';
    this.todos = HomeService.todos; 
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
  
  addTitle()
  {
    return this.title;
  }
  
  
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
  
  GetTask()
  {
    // this.data = this.HomeService.getDataFromFireBase();
    alert(this.todos);

  }
  
  
  
  
  
   login() {
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
  logout() {
    this.email = null;
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
 
  

}