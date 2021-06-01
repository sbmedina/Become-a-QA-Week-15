const Page = require("./page");
class LoginPage extends Page {
    get username() {
        return $("#user-name");
    }
    get password() {
        return $("#password");
    }
    get errorMsg() {
        return $(".error-message-container.error");
    }
    get closeErrorMessage() {
        return $(".error-button");
    }
    get submitBtn() {
        return $("#login-button");
    }

    open() {
        return super.open("");
    }
}

module.exports = new LoginPage();
