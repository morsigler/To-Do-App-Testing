import { ToDoMain } from "../page-objects/ToDoMain.page";
const ToDoMainPage = new ToDoMain();
const taskWithSpecialChars = "Task@#%"
const basicTaskText = "Task"

beforeEach(() => {
    cy.visit('/')
  })

describe('New task text bar', () => {
    it('Add task - Special chars ', () => {
        ToDoMainPage.addTask(taskWithSpecialChars);
        ToDoMainPage.verifyTaskInList(taskWithSpecialChars);
    });

    it('Toggle all ', () => {
        for (let i = 1; i < 4; i++) {
            ToDoMainPage.addTask(basicTaskText+i);
          }
        ToDoMainPage.clickToggleAllBtn();
        ToDoMainPage.verifyAllTasksCompletedInList();
    });

});