class resultsPage {
  selectProduct(value) {
    const prod = cy.get('[data-asin="B08D3TNX5F"]');
    //cy.get("#a-autoid-17-announce").should("be.enabled");
    prod.click();
    return this;
  }
  selectProductId(value) {
    const prodId = cy.get('[data-asin="B08D3TNX5F"]');
    //cy.get("#a-autoid-17-announce").should("be.enabled");
    prodId.click();
    return this;
  }
}
export default resultsPage;
