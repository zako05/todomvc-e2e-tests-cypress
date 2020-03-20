export class TodoFiltering {
  navigate () {
    cy.visit("localhost:3000")
  }

  getAllItems() {
    //in order to gain required state of app
    this.getActiveItems()
    cy.get("[data-cy=filter] > a").contains("All").click()
  }

  getActiveItems() {
    cy.get("[data-cy=filter] > a").contains("Active").click()
  }

  getCompletedItems() {
    cy.get("[data-cy=filter] > a").contains("Completed").click()
  }

  validateNumberOfActiveItems(numberOfItems) {
    cy.get("[data-cy=todo-count] > strong").should("have.text", numberOfItems.toString())
  }

  validateNumberOfShownItems(numberOfItems) {
    cy.get("[data-cy=todo-item-label]").should("have.length", numberOfItems)
  }
}
