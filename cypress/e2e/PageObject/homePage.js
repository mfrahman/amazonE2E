class homePage {
  baseUrl() {
    cy.visit("https://www.amazon.com/");
  }
  fillProduct(value) {
    const prodName = cy.get("#twotabsearchtextbox");
    prodName.clear();
    prodName.type(value);
    return this;
  }
  searchProduct() {
    const searchBtn = cy.get("[type='submit']");
    searchBtn.click();
    return this;
  }
}
export default homePage;
