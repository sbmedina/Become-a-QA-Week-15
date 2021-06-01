const Page = require("../pageobjects/page");
class CartPage extends Page {
  get title() {
    return $("span.title");
  }
  get cartQtyLabel() {
    return $("div.cart_quantity_label");
  }
  get cartDescLabel() {
    return $("div.cart_desc_label");
  }
  get cart() {
    return $("a.shopping_cart_link");
  }
  get itemsAdded() {
    return $("span.shopping_cart_badge");
  }
  get cartQty() {
    return $("div.cart_quantity");
  }
  get cartItem() {
    return $("div.inventory_item_name");
  }
  get cartItemPrices() {
    return $(".inventory_item_price");
  }
  get cartListContainer() {
    return $(".cart_list");
  }
  get continueShopping() {
    return $("#continue-shopping");
  }
  get checkout() {
    return $("#checkout");
  }

  open() {
    return super.open("cart.html");
  }
}
module.exports = new CartPage();
