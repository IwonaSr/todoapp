export default class HomeService {
  constructor($firebaseArray) {
		this.STORAGE_ID = 'todoapp-email';
		this.email = this.getEmailFromLocalStorage();
		this.firebaseArray = $firebaseArray;
		this.todos = this.getDataFromFireBase();
	}
  

	getEmailFromLocalStorage() {
		return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
	}

	saveEmailToLocalStorage(email) {
		localStorage.setItem(this.STORAGE_ID, JSON.stringify(email));
	}
	
	connectToFireBase(todo) {
		let ref = new Firebase("https://popping-heat-8778.firebaseio.com/tasks");
		// return this.firebaseArray(ref);
		var messages = this.firebaseArray(ref);
		messages.$add(todo);
	}
	
	getDataFromFireBase() {
		let ref = new Firebase("https://popping-heat-8778.firebaseio.com/tasks");
    	// return messages.$asArray();
  //  	var tasks = ref.child("tasks");
		// $tasks = new $firebaseArray(tasks);
		// var newPost = ref.val();
		// return newPost;
		return this.firebaseArray(ref);
	}
	
	
	updateFireBase(todo) {
		let ref = new Firebase("https://popping-heat-8778.firebaseio.com/tasks");
		// return this.firebaseArray(ref);
		// var messages = this.firebaseArray(ref);
		
		// ref.update(tod); //przekazuje obiekt ale wyskakuje wyjatek
		//przekazuje ale znowu exception
		// var updatemessage =  this.firebaseArray(ref);
		// updatemessage.$save(todo);
		// console.log(updatemessage.$save(todo));
	
        this.todos.$save(todo);
   
	}
	
	
	
	
	  

	
	
}