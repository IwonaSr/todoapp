export default class HomeService {
  constructor() {
		this.STORAGE_ID = 'todoapp-email';
		this.email = this.getEmailFromLocalStorage();
	}

	getEmailFromLocalStorage() {
		return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
	}

	saveEmailToLocalStorage(email) {
		localStorage.setItem(this.STORAGE_ID, JSON.stringify(email));
	}
}