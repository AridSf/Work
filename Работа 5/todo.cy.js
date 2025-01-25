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

  const TABEL_ELEMENT = ".kOMSj8TE0LBty6yatos7 p"
  const FORM_CLASS = ".ZmusGegMkG9sO4AhKft1"
  const CLEAR_BUTTON = ".PLGPl3juaaActKxdqp4r"
  const MODEL_CLASS = ".hOHAbtCOIyeIzsBNXomV"
  const MODEL_CHOICE = ".zOYb8r74bS2EZVcmDp2w .tN6jXHD4obYiSUFu7wci"
  const AGREE_BUTTON = ".WkPsslBJWr7j_C9zxt94"
  const FIRST_BUTTON = "button[tabindex*=1]"
  const FIRST_MESSAGE = "Напиши текст 'Привет', без лишних символов"

  beforeEach(() => {

    cy.visit('https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1')

    for(let i = 1; i < 2; i++)
      {
        cy.get(FIRST_BUTTON).first().click()
        cy.get(FIRST_BUTTON).first().click()
      }
  
      cy.get(AGREE_BUTTON).click()

  })

  it('(1) проверка на наличие элемента темы', () => {
    cy.get(".u2v5l6HAChXfgFTklgfU span button").click()

    cy.get(".nav-menu--theme .nav-menu__item").first().next().should('contain', ('Themes' || 'Темы'))
  })

  it('(2) тот же перебор с помощью each', () => {
    cy.get(".nav-menu--theme .nav-menu__item").each(($el, item, $list) => {

      try {
        $el.should('contain', ('Themes' || 'Темы'))
      }catch (error){
        
      }

    })
  })

  it('(3) Проверка заголовков на страницах на наличие подстрок', () => {

    
    
    cy.title().should('include', ('AI Chat' || 'Duck.ai'))

    cy.get(".u2v5l6HAChXfgFTklgfU span button").click()

    cy.get(".nav-menu--theme .nav-menu__item").first().click()

    cy.title().should('include', 'DuckDuckGo')

  })

  
})
