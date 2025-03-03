import path from "path";
import { Locator, Page } from "playwright/test";
import * as brightHRLoginCredentials from '../testData/brightHRLoginCredentials.json';

let page;

export class LoginPage{
    readonly page: Page;
    readonly usernameClick: Locator;
    readonly usernameFill: Locator;
    readonly passwordClick: Locator;
    readonly passwordFill: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    constructor(page:Page)
    {
        this.page = page;

        this.usernameClick = page.getByRole('textbox', { name: 'Email address' });
        this.usernameFill = page.getByRole('textbox', { name: 'Email address' });
        this.passwordClick = page.getByRole('textbox', { name: 'Password visibility' });
        this.passwordFill = page.getByRole('textbox', { name: 'Password visibility' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async goto() {
        await this.page.goto('https://sandbox-login.brighthr.com/login');
      }

    async loginBrightHR() {
              
       //Login to BrightHR       
       await this.usernameClick.click();
       await this.usernameFill.fill(brightHRLoginCredentials.loginUsername);
       await this.passwordClick.click();
       await this.passwordFill.fill(brightHRLoginCredentials.loginPassword);
       await this.loginButton.click();
       
      
      }

      async logoutBrightHR() {
              
        //Logout to BrightHR       
        await this.logoutButton.click();        
               
       }
    
}