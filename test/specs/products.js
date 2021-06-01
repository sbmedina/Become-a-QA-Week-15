const ProductsPage = require("../pageobjects/products.page");
const LoginPage = require("../pageobjects/login.page");
const CartPage = require("../pageobjects/cart.page");

describe("Inventory page test", () => {
  beforeAll("Open browser", () => {
    browser.url("https://www.saucedemo.com");
    LoginPage.username.setValue("standard_user");
    LoginPage.password.setValue("secret_sauce");
    LoginPage.submit();
  });
  it("Test the user is in the correct page", () => {
    expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    expect(ProductsPage.title).toHaveText("PRODUCTS");
  });
  it("Check if there are items available ", () => {
    expect(ProductsPage.backpack).toBeDisplayed;
    expect(ProductsPage.backpackImg).toBeDisplayed;
    expect(ProductsPage.bikeLight).toBeDisplayed;
    expect(ProductsPage.bikeLightImg).toBeDisplayed;
    expect(ProductsPage.onesie).toBeDisplayed;
    expect(ProductsPage.onesieImg).toBeDisplayed;
  });
  it("Sort products by name from Z to A", () => {
    ProductsPage.sortByBtn.click();
    ProductsPage.sortByNameZa.click();
    expect(ProductsPage.firstItem).toHaveTextContaining(
      "Test.allTheThings() T-Shirt (Red)"
    );
    expect(ProductsPage.secondItem).toHaveTextContaining("Sauce Labs Onesie");
    expect(ProductsPage.thirdItem).toHaveTextContaining(
      "Sauce Labs Fleece Jacket"
    );
    expect(ProductsPage.fourthItem).toHaveTextContaining(
      "Sauce Labs Bolt T-Shirt"
    );
    expect(ProductsPage.fifthItem).toHaveTextContaining(
      "Sauce Labs Bike Light"
    );
    expect(ProductsPage.sixthItem).toHaveTextContaining("Sauce Labs Backpack");
  });
  it("Sort products by price from low to high", () => {
    ProductsPage.sortByBtn.click();
    ProductsPage.sortByLowToHigh.click();
    expect(ProductsPage.firstItem).toHaveTextContaining("Sauce Labs Onesie");
    expect(ProductsPage.secondItem).toHaveTextContaining(
      "Sauce Labs Bike Light"
    );
    expect(ProductsPage.thirdItem).toHaveTextContaining(
      "Sauce Labs Bolt T-Shirt"
    );
    expect(ProductsPage.fourthItem).toHaveTextContaining(
      "Test.allTheThings() T-Shirt (Red)"
    );
    expect(ProductsPage.fifthItem).toHaveTextContaining("Sauce Labs Backpack");
    expect(ProductsPage.sixthItem).toHaveTextContaining(
      "Sauce Labs Fleece Jacket"
    );
  });
  it("Sort the products by price from high to low", () => {
    ProductsPage.sortByBtn.click();
    ProductsPage.sortByHighToLow.click();
    expect(ProductsPage.firstItem).toHaveTextContaining(
      "Sauce Labs Fleece Jacket"
    );
    expect(ProductsPage.secondItem).toHaveTextContaining("Sauce Labs Backpack");
    expect(ProductsPage.thirdItem).toHaveTextContaining(
      "Sauce Labs Bolt T-Shirt"
    );
    expect(ProductsPage.fourthItem).toHaveTextContaining(
      "Test.allTheThings() T-Shirt (Red)"
    );
    expect(ProductsPage.fifthItem).toHaveTextContaining(
      "Sauce Labs Bike Light"
    );
    expect(ProductsPage.sixthItem).toHaveTextContaining("Sauce Labs Onesie");
  });
  it("Sort the products by name from A to Z", () => {
    ProductsPage.sortByBtn.click();
    ProductsPage.sortByNameAz.click();
    expect(ProductsPage.firstItem).toHaveTextContaining("Sauce Labs Backpack");
    expect(ProductsPage.secondItem).toHaveTextContaining(
      "Sauce Labs Bike Light"
    );
    expect(ProductsPage.thirdItem).toHaveTextContaining(
      "Sauce Labs Bolt T-Shirt"
    );
    expect(ProductsPage.fourthItem).toHaveTextContaining(
      "Sauce Labs Fleece Jacket"
    );
    expect(ProductsPage.fifthItem).toHaveTextContaining("Sauce Labs Onesie");
    expect(ProductsPage.sixthItem).toHaveTextContaining(
      "Test.allTheThings() T-Shirt (Red)"
    );
  });
});
describe("Add and remove items from the inventory page", () => {
  beforeAll("Open browser", () => {
    browser.url("https://www.saucedemo.com");
    LoginPage.username.setValue("performance_glitch_user");
    LoginPage.password.setValue("secret_sauce");
    LoginPage.submit();
  });
  it("Add the required item to the cart ", () => {
    ProductsPage.backpackAddBtn.click();
    ProductsPage.bikeLightAddBtn.click();
    ProductsPage.boltTShirtAddBtn.click();
    ProductsPage.fleeceJacketAddBtn.click();
    ProductsPage.onesieAddBtn.click();
    ProductsPage.tShirtRedAddBtn.click();
    expect(CartPage.itemsAdded).toHaveText("6");
    browser.pause(3000);
  });
  it("Remove items from the cart ", () => {
    ProductsPage.backpackRemoveBtn.click();
    ProductsPage.bikeLightRemoveBtn.click();
    ProductsPage.boltTShirtRemoveBtn.click();
    ProductsPage.fleeceJacketRemoveBtn.click();
    ProductsPage.onesieRemoveBtn.click();
    ProductsPage.tShirtRedRemoveBtn.click();
    expect(CartPage.itemsAdded).toMatch("");
  });
});
describe("Add and remove items from the cart for every item description page", () => {
  beforeAll("Open browser", () => {
    browser.url("https://www.saucedemo.com");
    LoginPage.username.setValue("standard_user");
    LoginPage.password.setValue("secret_sauce");
    LoginPage.submit();
  });
  it("Add the required item to the cart ", () => {
    ProductsPage.backpack.click();
    ProductsPage.backpackAddBtn.click();
    expect(CartPage.itemsAdded).toHaveText("1");
    ProductsPage.backpackRemoveBtn.click();
    expect(CartPage.itemsAdded).toMatch("");
    ProductsPage.backToProducts.click();
    ProductsPage.bikeLight.click();
    ProductsPage.bikeLightAddBtn.click();
    expect(CartPage.itemsAdded).toHaveText("1");
    ProductsPage.bikeLightRemoveBtn.click();
    expect(CartPage.itemsAdded).toMatch("");
  });
});
