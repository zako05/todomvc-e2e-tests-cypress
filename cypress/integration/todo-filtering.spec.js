// import { TodoFiltering } from "../page-objects/todo-filtering.page";

import {
  navigate,
  getAllItems,
  getActiveItems,
  getCompletedItems,
  validateNumberOfActiveItems,
  validateNumberOfShownItems
} from "../page-objects/todo-filtering.page";

describe("Filtering items", () => {
  // const = new TodoFiltering();
  const item = "Task";

  beforeEach(() => {
    let n = 1;
    navigate();
    while (n <= 2) {
      //in order to gain required state of app
      cy.addTodoItem(item + n);
      n++;
    }
    //in order to gain required state of app
    cy.markTodoItemCompleted(item);
  });

  it("all succceded", () => {
    getAllItems();
    validateNumberOfShownItems(2);
  });

  it("active succeeded", () => {
    getActiveItems();
    validateNumberOfActiveItems(1);
  });

  it("completed succeede", () => {
    getCompletedItems();
    validateNumberOfShownItems(1);
  });
});
