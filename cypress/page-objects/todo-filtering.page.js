export const navigate = () => {
  cy.visit("localhost:3000");
};

export const getAllItems = () => {
  //in order to gain required state of app
  getActiveItems();
  cy.get("[data-cy=filter] > a")
    .contains("All")
    .click();
};

export const getActiveItems = () => {
  cy.get("[data-cy=filter] > a")
    .contains("Active")
    .click();
};

export const getCompletedItems = () => {
  cy.get("[data-cy=filter] > a")
    .contains("Completed")
    .click();
};

export const validateNumberOfActiveItems = numberOfItems => {
  cy.get("[data-cy=todo-count] > strong").should(
    "have.text",
    numberOfItems.toString()
  );
};

export const validateNumberOfShownItems = numberOfItems => {
  cy.get("[data-cy=todo-item-label]").should("have.length", numberOfItems);
};
