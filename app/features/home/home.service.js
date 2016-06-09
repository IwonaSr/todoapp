export default class HomeService {

  constructor($firebaseArray) {
		this.STORAGE_ID = 'todoapp-email';
		this.email = this.getEmailFromLocalStorage();
		this.firebaseArray = $firebaseArray;
		this.todos = this.getDataFromFireBase();
	}
	

	getEmailFromLocalStorage() {
		return localStorage.getItem(this.STORAGE_ID);
	}

	saveEmailToLocalStorage(email) {
			localStorage.setItem(this.STORAGE_ID, email);
	}
	
	connectToFireBase(todo) {
		this.todos.$add(todo);
	}
	
	getDataFromFireBase() {
		let ref = new Firebase("https://popping-heat-8778.firebaseio.com/tasks");
		return this.firebaseArray(ref);
	}

	
	updateFireBase(todo) {
	        this.todos.$save(todo);
   	}
	
	
}