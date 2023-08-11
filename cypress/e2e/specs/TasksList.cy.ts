import { ToDoMain } from "../page-objects/ToDoMain.page";
const ToDoMainPage = new ToDoMain();
const taskToKeep = "Task to keep"
const taskToDelete = "Task to delete"
const tasks = [ taskToKeep,taskToDelete]


beforeEach(() => {
    cy.visit('/')
  })

describe('Task in list', () => {
    it('Delete', () => {
        tasks.forEach(task => {
            ToDoMainPage.addTask(task);
        })
        ToDoMainPage.getTasksCountNumber().then(($result) => {
            let numOfTasks = $result;
            ToDoMainPage.deleteTask(taskToDelete);
            ToDoMainPage.verifyTaskIsNotInList(taskToDelete);
            ToDoMainPage.verifyTasksCountInlist(numOfTasks-1);
          })
    });

});