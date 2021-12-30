describe("Start with online shop", () =>{
    it('Visit to the main page', ()=>{
        cy.visit('https://online-farm-shop.herokuapp.com/login')
        cy.get('input:first')
        .type('iam@iam.il')
        cy.get('input:last')
        .type('imimimim')
        cy.contains('Login')
        .click()
        cy.wait(60000)

    })
    
    it('Visit to catalog', ()=>{
        cy.get('button:last').contains('Add to Cart')
        .click()
        cy.wait(10000)
        cy.contains('Add to Cart')
        .click()
        cy.wait(10000)
        cy.get('button').contains('add').click()
        cy.wait(10000)
        cy.get('button').contains('add').click()
        cy.wait(10000)

        cy.get('button').contains('remove').click()
        cy.wait(10000)
        
        cy.wait(20000)
        cy.contains('shopping').click()
        cy.wait(30000)
    })

    it('Visit to card', ()=>{
        cy.get('button').contains('add').click()
        cy.wait(7000)
        
        cy.get('button').contains('remove').click()
        cy.wait(10000)
        cy.contains('Check Out').click()
        cy.wait(20000)
    })

    it('Visit to Shipping', () =>{
        cy.get('input:first')
        .type('Israel')
        cy.get('#mat-input-3').type('Beit Shemesh')
        cy.get('#mat-input-4').type('Ravina, 5')
        cy.get('#mat-input-5').type('121323')
        cy.get('#mat-input-6').type('hi, end')
        cy.contains('Place Order').click()
    })
    
})