export default class HomeController {

 constructor(HomeService) {
 
    'use strict';
    this.HomeService = HomeService;
    this.email = HomeService.getEmailFromLocalStorage();
    // this.$scope.newTodo = '';
    // this.$scope.todos = HomeService.todos;
    this.title = 'To do';
     
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
  
  AddTask()
  {
    alert(this.title);
  }
  
  

}