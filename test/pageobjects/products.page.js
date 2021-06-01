const Page = require("../pageobjects/page");
class ProductsPage extends Page {
  get title() {
    return $("span.title");
  }
  get detailsContainer() {
    return $(".inventory_details_container");
  }

  get arrayItems() {
    return $$(".inventory_item");
  }
  get backpack() {
    return $("#item_4_title_link");
  }
  get bikeLight() {
    return $("#item_0_title_link");
  }
  get boltTShirt() {
    return $("#item_1_title_link");
  }
  get fleeceJacket() {
    return $("#item_5_title_link");
  }
  get onesie() {
    return $("#item_2_title_link");
  }
  get tShirtRed() {
    return $("#item_3_title_link");
  }

  get backpackImg() {
    return $("#item_4_img_link");
  }
  get bikeLightImg() {
    return $("#item_0_img_link");
  }
  get boltTShirtImg() {
    return $("#item_1_img_link");
  }
  get fleeceJacketImg() {
    return $("#item_5_img_link");
  }
  get onesieImg() {
    return $("#item_2_img_link");
  }
  get tShirtRedImg() {
    return $("#item_3_img_link");
  }

  get sortByBtn() {
    return $(".select_container");
  }
  get sortByNameAz() {
    return $("span > select > option:nth-child(1)");
  }
  get sortByNameZa() {
    return $("span > select > option:nth-child(2)");
  }
  get sortByLowToHigh() {
    return $("span > select > option:nth-child(3)");
  }
  get sortByHighToLow() {
    return $("span > select > option:nth-child(4)");
  }
  get firstItem() {
    return $(".inventory_item:nth-child(1)");
  }
  get secondItem() {
    return $(".inventory_item:nth-child(2)");
  }
  get thirdItem() {
    return $(".inventory_item:nth-child(3)");
  }
  get fourthItem() {
    return $(".inventory_item:nth-child(4)");
  }
  get fifthItem() {
    return $(".inventory_item:nth-child(5)");
  }
  get sixthItem() {
    return $(".inventory_item:nth-child(6)");
  }

  get backpackAddBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get bikeLightAddBtn() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  get boltTShirtAddBtn() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  get fleeceJacketAddBtn() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get onesieAddBtn() {
    return $("#add-to-cart-sauce-labs-onesie");
  }
  get tShirtRedAddBtn() {
    return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }

  get backpackRemoveBtn() {
    return $("#remove-sauce-labs-backpack");
  }
  get bikeLightRemoveBtn() {
    return $("#remove-sauce-labs-bike-light");
  }
  get boltTShirtRemoveBtn() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }
  get fleeceJacketRemoveBtn() {
    return $("#remove-sauce-labs-fleece-jacket");
  }
  get onesieRemoveBtn() {
    return $("#remove-sauce-labs-onesie");
  }
  get tShirtRedRemoveBtn() {
    return $('[name="remove-test.allthethings()-t-shirt-(red)"]');
  }

  get itemsPrices() {
    return $(".inventory_details_price");
  }

  get backToProducts() {
    return $("#back-to-products");
  }

  open() {
    return super.open("inventory.html");
  }
}
module.exports = new ProductsPage();
