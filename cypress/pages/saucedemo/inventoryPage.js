//Se valida el span h3 con la clase title en la pagina del inventario. ( ver carpeta pom dentro de e2e)

class inventoryPage {
    elements = {
        titleSpan: () => cy.get('.title')
    }
}

module.exports = new inventoryPage();