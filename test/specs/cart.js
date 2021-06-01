const CartPage = require("../pageobjects/cart.page");
const ProductsPage = require("../pageobjects/products.page");
const LoginPage = require("../pageobjects/login.page");

describe("Cart Page Test", () => {
  beforeEach("Open browser", () => {
    browser.url("https://www.saucedemo.com");
    LoginPage.username.setValue("standard_user");
    LoginPage.password.setValue("secret_sauce");
    LoginPage.submit();
  });
  it("Test the user is in the correct page", () => {
    CartPage.cart.click();
    expect(CartPage.title).toHaveText("YOUR CART");
    expect(CartPage.cartQtyLabel).toBeDisplayed;
    expect(CartPage.cartDescLabel).toBeDisplayed;
  });
});
describe("Cart test", () => {
  beforeEach("Open browser", () => {
    browser.url("https://www.saucedemo.com");
    LoginPage.username.setValue("standard_user");
    LoginPage.password.setValue("secret_sauce");
    LoginPage.submit();
  });
  it("Check items on the cart", () => {
    ProductsPage.redTShirtAddBtn.click();
    CartPage.cart.click();
    expect(CartPage.cartQty).toHaveText("1");
    expect(CartPage.cartItem).toHaveText("Test.allTheThings() T-Shirt (Red)");
    expect(CartPage.cartItemPrices).toHaveText("$15.99");
    ProductsPage.redTShirtRemoveBtn.click();
    expect(CartPage.cartQty).not.toBeDisplayed;
  });
  it("Add an item to the cart", () => {
    ProductsPage.boltTShirtAddBtn.click();
    CartPage.cart.click();
    expect(CartPage.cartListContainer).toHaveTextContaining(
      "Sauce Labs Bolt T-Shirt"
    );
    expect(CartPage.cartItemPrices).toHaveText("$15.99");
    CartPage.continueShopping.click();
    ProductsPage.onesieAddBtn.click();
    ProductsPage.backpackAddBtn.click();
    CartPage.cart.click();
    expect(CartPage.cartListContainer).toHaveTextContaining([
      "Sauce Labs Backpack",
      "Sauce Labs Onesie",
    ]);
  });
  it("Remove an item from the cart", () => {
    CartPage.cart.click();
    ProductsPage.onesieRemoveBtn.click();
    expect(CartPage.cartListContainer).toHaveTextContaining([
      "Sauce Labs Backpack",
      "Sauce Labs Bolt T-Shirt",
    ]);
    expect(CartPage.cartListContainer).not.toHaveTextContaining(
      "Sauce Labs Onesie"
    );
  });
  describe("Checkout test", () => {
    beforeEach("Open browser", () => {
      browser.url("https://www.saucedemo.com");
      LoginPage.username.setValue("standard_user");
      LoginPage.password.setValue("secret_sauce");
      LoginPage.submit();
    });
    it("Should allow checkout when the cart has at least one item", () => {
      ProductsPage.bikeLightAddBtn.click();
      CartPage.cart.click();
      CartPage.checkout.click();
      expect(browser).toHaveUrl(
        "https://www.saucedemo.com/checkout-step-one.html"
      );
    });
    it("Should not allow checkout when the cart is empty", () => {
      CartPage.cart.click();
      ProductsPage.bikeLightRemoveBtn.click();
      CartPage.checkout.click();
      expect(browser).toHaveUrl(
        "https://www.saucedemo.com/checkout-step-one.html"
      );
    });
  });
});
