const LoginPage = require("../pageobjects/login.page");

describe("Login page tests", () => {
  beforeEach("Open browser", () => {
    LoginPage.open();
  });
  describe("Login with invalid credentials", () => {
    it("Do not log in without data", () => {
      LoginPage.username.setValue("");
      LoginPage.password.setValue("");
      LoginPage.submit();
      expect(LoginPage.errorMsg).toBeDisplayed;
      expect(LoginPage.errorMsg).toHaveText(
        "Epic sadface: Username is required"
      );
    });

    it("Do not login without username", () => {
      LoginPage.username.setValue("");
      LoginPage.password.setValue("secret_sauce");
      LoginPage.submit();
      expect(LoginPage.username).not.toHaveText;
      expect(LoginPage.errorMsg).toBeDisplayed;
    });

    it("Do not login without password", () => {
      LoginPage.username.setValue("problem_user");
      LoginPage.password.setValue("");
      LoginPage.submit();
      expect(LoginPage.errorMsg).toBeDisplayed;
    });

    it("Do not login with invalid username", () => {
      LoginPage.username.setValue("mike_user");
      LoginPage.password.setValue("secret_sauce");
      LoginPage.submit();
      expect(LoginPage.errorMsg).toBeDisplayed;
    });

    it("Do not login with invalid password", () => {
      LoginPage.username.setValue("performance_glitch_user");
      LoginPage.password.setValue("pass123");
      LoginPage.submit();
      expect(LoginPage.errorMsg).toBeDisplayed;
    });

    it("Do not login with invalid username and password", () => {
      LoginPage.username.setValue("mike_user");
      LoginPage.password.setValue("pass123");
      LoginPage.submit();
      expect(LoginPage.errorMsg).toBeDisplayed;
    });

    it("Do not login with locked username", () => {
      LoginPage.username.setValue("locked_out_user");
      LoginPage.password.setValue("secret_sauce");
      LoginPage.submit();
      expect(browser).not.toHaveUrl("https://www.saucedemo.com/inventory.html");
      expect(LoginPage.errorMsg).toHaveText(
        "Epic sadface: Sorry, this user has been locked out."
      );
    });

    describe("Login with valid credentials", () => {
      it("Login with valid username and password", () => {
        LoginPage.username.setValue("standard_user");
        LoginPage.password.setValue("secret_sauce");
        LoginPage.submit();
        expect(browser.getUrl()).toBe(
          "https://www.saucedemo.com/inventory.html"
        );
      });
    });
  });
});
