export default class HomeController {

 constructor(HomeService) {
 
    'use strict';
    this.HomeService = HomeService;
    this.email = HomeService.getEmailFromLocalStorage();
  }

  login() {
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
  
  logout() {
    this.email = null;
    this.HomeService.saveEmailToLocalStorage(this.email);
  }
}