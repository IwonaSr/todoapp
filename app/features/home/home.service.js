export default class HomeService {
  constructor($q,$firebaseArray) {
  		this.$q = $q;
		this.STORAGE_ID = 'todoapp-email';
		this.email = this.getEmailFromLocalStorage();
		this.firebaseArray = $firebaseArray;
	}
  

	getEmailFromLocalStorage() {
		return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
	}

	saveEmailToLocalStorage(email) {
		localStorage.setItem(this.STORAGE_ID, JSON.stringify(email));
	}
	
	// connectToFireBase(completed,title) {
	// 	let ref = new Firebase("https://popping-heat-8778.firebaseio.com/tasks");
	// 	// return this.firebaseArray(ref);
	// 	var messages = this.firebaseArray(ref);
	// 	messages.$add({
	// 		completed: true,
	// 		owner: this.email,
	// 		title: title
	// 	});
	// }
	
	

	
		  

	
	
}