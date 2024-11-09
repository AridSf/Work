/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')

    cy.get('.form_group').should('have.length', 2)

    cy.get('.input_error').first().type('standard_user')
    cy.get('.input_error').last().type('secret_sauce', 'enter')
    cy.get('input').last().click()
  })

  it('Первое задание', () => {
    cy.get(".product_sort_container").select("lohi")

    cy.get('.inventory_item_price').then(($prices) => {      const prices = $prices.map((index, html) => parseFloat(html.innerText.replace('$', ''))).get()
      const sortedPrices = [...prices].sort((a, b) => a - b) 
      expect(prices).to.deep.equal(sortedPrices)
    })
  
  })

  it('Второе задание', () => {
    
    cy.get('.pricebar .btn').first().click()
    cy.get('.pricebar .btn').last().click()

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_footer .btn').last().click()

    cy.get('.form_group').should('have.length', 3)

    cy.get('.form_group input').each((elem, i, array) => {
      cy.get(elem).type("Text" + i)
    })

    cy.get('.submit-button').click()

    cy.get('.cart_footer .btn').last().click()

    

  })

})
