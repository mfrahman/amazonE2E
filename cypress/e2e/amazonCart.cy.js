import homePage from "./PageObject/homePage";
import productDetailsPage from "./PageObject/productDetailsPage";
import resultsPage from "./PageObject/resultPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Amazon Product search", function () {
  it("search by product name/text", function () {
    const productData = new homePage();
    productData.baseUrl();
    productData.fillProduct(
      "YETI Rambler 20 oz Travel Mug, Stainless Steel, Vacuum Insulated with Stronghold Lid, Navy"
    );
    productData.searchProduct();
    cy.contains(
      "Rambler 20 oz Travel Mug, Stainless Steel, Vacuum Insulated with Stronghold Lid, Navy"
    ).should("be.visible");
  });

  it("search by product id (ASIN)", function () {
    const productData = new homePage();
    productData.baseUrl();
    productData.fillProduct("B08D3TNX5F");
    productData.searchProduct();
    cy.contains(
      "Rambler 20 oz Travel Mug, Stainless Steel, Vacuum Insulated with Stronghold Lid, Navy"
    ).should("be.visible");
  });
  it("verify product(s) can be added to cart", function () {
    const productData = new homePage();
    productData.baseUrl();
    productData.fillProduct("B08D3TNX5F");
    productData.searchProduct();
    const resultData = new resultsPage();
    resultData.selectProductId();
    const prodDetailsData = new productDetailsPage();
    prodDetailsData.addProduct();
    cy.get('[data-asin="B08D3TNX5F"]');
    cy.get(".a-size-medium-plus").should("have.contain", "Added to Cart");
  });
});
