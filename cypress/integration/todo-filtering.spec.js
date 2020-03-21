import { TodoFiltering } from "../page-objects/todo-filtering.page";

describe("Filtering items", () => {
  const filter = new TodoFiltering();
  const item = "Task";

  beforeEach(() => {
    let n = 1;
    filter.navigate();
    while (n <= 2) {
      //in order to gain required state of app
      cy.addTodoItem(item + n);
      n++;
    }
    //in order to gain required state of app
    cy.markTodoItemCompleted(item);
  });

  it("all succceded", () => {
    filter.getAllItems();
    filter.validateNumberOfShownItems(2);
  });

  it("active succeeded", () => {
    filter.getActiveItems();
    filter.validateNumberOfActiveItems(1);
  });

  it("completed succeede", () => {
    filter.getCompletedItems();
    filter.validateNumberOfShownItems(1);
  });
});
