class productDetailsPage {
  addProduct() {
    const addToCartbtn = cy.get("#add-to-cart-button");
    addToCartbtn.click();
    return this;
  }
}
export default productDetailsPage;
