export class ToDoMain{

    //Locators
    newTaskTextBar(){return cy.get('input[class="new-todo"]');}
    taskInListByText(taskText:string){return cy.get('label').contains(taskText);}
    toggleAllButton(){return cy.get('label[for="toggle-all"]');}
    allTasksInList(){return cy.get('ul[class="todo-list"]>li');}
    deleteButtonForTaskByText(taskText:string){return this.taskInListByText(taskText).parent().find('button[class="destroy"]').invoke('show');}
    tasksCount(){return cy.get('span[class="todo-count"]>strong');}

    //Functions
    addTask(taskContent:string){
        this.newTaskTextBar().type(taskContent+'{enter}');
    }

    verifyTaskInList(taskContent:string){
        this.taskInListByText(taskContent).should('be.visible');
    }

    verifyTaskIsNotInList(taskContent:string){
        this.taskInListByText(taskContent).should('not.exist');
    }

    clickToggleAllBtn(){
        this.toggleAllButton().click();
    }

    verifyAllTasksCompletedInList(){
        this.allTasksInList()
        .each(($el) => {
          cy.wrap($el).should('have.class', 'completed');
        })
    }

    deleteTask(taskText:string){
        this.deleteButtonForTaskByText(taskText).click();
    }

    getTasksCountNumber(){
        return this.tasksCount().invoke('text').then(parseInt);
    }
    verifyTasksCountInlist(expectedCount:number){
        this.getTasksCountNumber().and('equal', expectedCount)
    }
}