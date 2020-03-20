import {TodoActions} from '../page-objects/todo-actions.page'
import {TodoFiltering} from '../page-objects/todo-filtering.page'

describe("Todo item", () => {
  const todo = new TodoActions()
  const filtering = new TodoFiltering()
  const item = "Task"
  const newItem = "Task2"

  beforeEach(() => {
    todo.navigate()
    cy.addTodoItem(item)
  })

  it("add succeeded", () => {
    const newItem = "Task1"
    todo.add(newItem)
    todo.validateItem(newItem)
  })
  
  it ("marked as completed succeeded", () => {
    todo.markAsComplete()
    todo.validateItemCompleted()
  })

  context("completed", () => {
    beforeEach(() =>{
      cy.markTodoItemCompleted(item)
    })

    it ("unmarked succeeded", () => {
      todo.unmarkCompleted()
      todo.validateItemUncompleted()
    })

    it("remove succeeded", () => {
      todo.remove(item)
      todo.validateRemoveItem()
    })
  })

  it("remove succeeded", () => {
    todo.remove(item)
    todo.validateRemoveItem()
  })

  it("update succeeded", () => {
    todo.update(item, newItem)
    todo.validateItem(newItem)
  })

  context("list", () => {
    beforeEach(() => {
      let n = 1
      while ( n <= 4) {
        cy.addTodoItem(item + n)
        n++
      }
    })

    it("of 5 items showed successfully", () => {
      const numberOfItems = 5
      todo.validateListOfItems(numberOfItems)
      filtering.validateNumberOfActiveItems(numberOfItems)
    })
  })
})
