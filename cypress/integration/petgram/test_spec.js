const { isType } = require("graphql")
const { checkPropTypes } = require("prop-types")

/* global describe, it , cy */

describe('Petgram',function(){
    it('para ver si la app funciona',function(){
       cy.visit('/')
    })

    //navegar entre categorias
    it('navagamos a una categoria y vemos fotos',function(){
        cy.visit('/pet/1')
        //tomar elemento css
        cy.get('article')
     })

     it('si podemos navegar con la navbar a la home',function(){
        cy.visit('/pet/1')
        //tomar elemento css, link de nav, primer elemento 
        cy.get('nav a').first().click()
        //revisar su la url es la principal
        cy.url().should('include','/')
     })

     it('los usuarios no registrados ven el formulario de inicio/registro al ir a favs',function(){
        cy.visit('/favs')
        //recuperar formulario, mas de un elemento
        cy.get('form').should('have.length',2)
       
     })
})