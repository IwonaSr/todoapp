export default class HomeController {

    constructor(HomeService, $scope, $stateParams) {

        this.filterAttribute = $stateParams.filter;
        this.HomeService = HomeService;
        this.title = '';
        this.todos = HomeService.todos;
        this.status = this.email !== '' && this.email !== null ? 'Zalogowany' : 'Wylogowany'
        this.email = HomeService.getEmailFromLocalStorage();
        $scope.$on('$stateChangeSuccess', this.filterTasks.bind(this));
        this.statusFilter = '';
    }

    login() {
        this.HomeService.saveEmailToLocalStorage(this.email);
        this.status = 'Zalogowany';
    }

    logout() {
        this.email = '';
        this.HomeService.saveEmailToLocalStorage(this.email);
        this.status = 'Wylogowany';
    }

    AddTask() {
        var email = this.HomeService.getEmailFromLocalStorage();

        if (email !== '' && email !== null) {
            var todo = {
                title: this.title,
                email: email,
                completed: false
            };
            this.HomeService.addToFireBase(todo);
            this.title = '';
        }
        else {
            alert('Not logged');
        }
    }

    finishTask(todo) {
        todo.completed = true;
        this.HomeService.updateInFireBase(todo);
    }

    removeTask(todo) {
        this.HomeService.removeFromFireBase(todo);
    }

    filterTasks() {
        this.statusFilter = (this.filterAttribute === 'all') ? {

        } : (this.filterAttribute === 'completed') ? {
            completed: true
        } : (this.filterAttribute === 'uncompleted') ? {
            completed: false
        } : (this.filterAttribute === 'mine') ? {
            email: this.email
        } : {};
    }
}