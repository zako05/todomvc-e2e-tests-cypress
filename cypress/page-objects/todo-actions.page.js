export const navigate = () => {
  cy.visit("localhost:3000");
};

export const add = text => {
  cy.get("[data-cy=new-todo-input]").type(`${text}{enter}`);
};

export const remove = text => {
  cy.get("[data-cy=todo-item-remove]").click({ force: true });
};

export const markAsComplete = () => {
  cy.get("[data-cy=toggle]")
    .first()
    .check();
};

export const unmarkCompleted = () => {
  cy.get("[data-cy=toggle]")
    .first()
    .uncheck();
};

export const update = (oldText, newText) => {
  cy.get("[data-cy=todo-item-label]")
    .contains(oldText)
    .dblclick();
  cy.get(`[value=${oldText}]`)
    .clear()
    .type(newText + "{enter}");
};

export const validateItem = text => {
  cy.get("[data-cy=todo-item-label]")
    .contains(text)
    .should("be.visible");
};

export const validateRemoveItem = () => {
  cy.get("[data-cy=todo-item-label]").should("not.be.visible");
};

export const validateListOfItems = numberOfItems => {
  cy.get("[data-cy=todo-item-label]").should("have.length", numberOfItems);
};

export const validateItemCompleted = () => {
  cy.get("[data-cy=toggle]")
    .first()
    .should("be.checked");
};

export const validateItemUncompleted = () => {
  cy.get("[data-cy=toggle]")
    .first()
    .should("not.be.checked");
};
