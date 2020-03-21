export class TodoActions {
  navigate() {
    cy.visit("localhost:3000");
  }

  add(text) {
    cy.get("[data-cy=new-todo-input]").type(`${text}{enter}`);
  }

  remove(text) {
    cy.get("[data-cy=todo-item-remove]").click({ force: true });
  }

  markAsComplete() {
    cy.get("[data-cy=toggle]")
      .first()
      .check();
  }

  unmarkCompleted() {
    cy.get("[data-cy=toggle]")
      .first()
      .uncheck();
  }

  update(oldText, newText) {
    cy.get("[data-cy=todo-item-label]")
      .contains(oldText)
      .dblclick();
    cy.get(`[value=${oldText}]`)
      .clear()
      .type(newText + "{enter}");
  }

  validateItem(text) {
    cy.get("[data-cy=todo-item-label]")
      .contains(text)
      .should("be.visible");
  }

  validateRemoveItem() {
    cy.get("[data-cy=todo-item-label]").should("not.be.visible");
  }

  validateListOfItems(numberOfItems) {
    cy.get("[data-cy=todo-item-label]").should("have.length", numberOfItems);
  }

  validateItemCompleted() {
    cy.get("[data-cy=toggle]")
      .first()
      .should("be.checked");
  }

  validateItemUncompleted() {
    cy.get("[data-cy=toggle]")
      .first()
      .should("not.be.checked");
  }
}
