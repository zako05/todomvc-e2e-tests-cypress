// import { TodoActions } from "../page-objects/todo-actions.page";
// import { TodoFiltering } from "../page-objects/todo-filtering.page";

import {
  navigate,
  add,
  remove,
  markAsComplete,
  unmarkCompleted,
  update,
  validateItem,
  validateRemoveItem,
  validateListOfItems,
  validateItemCompleted,
  validateItemUncompleted
} from "../page-objects/todo-actions.page";

import { validateNumberOfActiveItems } from "../page-objects/todo-filtering.page";

describe("Todo item", () => {
  // const = new TodoActions();
  // const filtering = new TodoFiltering();
  const item = "Task";
  const newItem = "Task2";

  beforeEach(() => {
    navigate();
    cy.addTodoItem(item);
  });

  it("add succeeded", () => {
    const newItem = "Task1";
    add(newItem);
    validateItem(newItem);
  });

  it("marked as completed succeeded", () => {
    markAsComplete();
    validateItemCompleted();
  });

  context("completed", () => {
    beforeEach(() => {
      cy.markTodoItemCompleted(item);
    });

    it("unmarked succeeded", () => {
      unmarkCompleted();
      validateItemUncompleted();
    });

    it("remove succeeded", () => {
      remove(item);
      validateRemoveItem();
    });
  });

  it("remove succeeded", () => {
    remove(item);
    validateRemoveItem();
  });

  it("update succeeded", () => {
    update(item, newItem);
    validateItem(newItem);
  });

  context("list", () => {
    beforeEach(() => {
      let n = 1;
      while (n <= 4) {
        cy.addTodoItem(item + n);
        n++;
      }
    });

    it("of 5 items showed successfully", () => {
      const numberOfItems = 5;
      validateListOfItems(numberOfItems);
      validateNumberOfActiveItems(numberOfItems);
    });
  });
});
