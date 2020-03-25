Cypress.Commands.add("addTodoItem", item => {
  cy.get(".new-todo").type(`${item}{enter}`)
})
Cypress.Commands.add("markTodoItemCompleted", item => {
  cy.get("[data-cy=toggle]").first().then(($toggle) => {
    if ($toggle) {
      cy.wrap($toggle).check()
    } else {
        cy.addTodoItem(item)
        cy.get($toggle).check()
    }
  })
})
