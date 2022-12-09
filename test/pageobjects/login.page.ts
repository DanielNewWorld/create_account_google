import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputFirstname () {
        return $('#firstName');
    }
    
    public get inputLastname () {
        return $('#lastName');
    }

    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#Passwd');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (firstname: string, lastname: string, username: string, password: string) {
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        //await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('signup');
    }
}

export default new LoginPage();
