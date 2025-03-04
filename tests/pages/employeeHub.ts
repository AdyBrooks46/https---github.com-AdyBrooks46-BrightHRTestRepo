import path from "path";
import { Locator, Page } from "playwright/test";
import * as brightHREmployees from '../testData/brightHREmployees.json';
const { test, expect } = require('@playwright/test');

let page;

export class EmployeeHubPage{
    readonly page: Page;
    readonly employeeLink: Locator;
    readonly addNewEmployee: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly emailAddress: Locator;
    readonly phoneNumber: Locator;
    readonly emailCheckBox: Locator;
    readonly datePicker: Locator;
    readonly dateMove: Locator;
    readonly monthSelector: Locator;
    readonly dateSelector: Locator;
    readonly jobTitle: Locator;
    readonly saveNewEmployee: Locator;
    readonly addAnotherEmployee: Locator;
    readonly closeModal: Locator;
    readonly assertEmployee: Locator;
    readonly assertEmployeeHub: Locator;
    readonly assertEmployeeNameJohnDoe: Locator;
    readonly assertEmployeeNameDaveSmith:  Locator;
    
    constructor(page:Page)
    {
        this.page = page;

        this.employeeLink = page.getByRole('link', { name: 'Employees' });
        this.addNewEmployee = page.getByRole('button', { name: 'Add employee' });
        this.firstName = page.getByRole('textbox', { name: 'First name' });        
        this.lastName = page.getByRole('textbox', { name: 'Last name' });
        this.emailAddress = page.getByRole('textbox', { name: 'Email address' })
        this.phoneNumber = page.getByRole('textbox', { name: 'Phone number (optional)' })
        this.emailCheckBox = page.getByTestId('checkboxLabel').locator('svg')
        this.datePicker = page.getByTestId('input-selector')
        this.dateMove = page.locator('.sc-fMiknA')
        this.monthSelector = page.getByRole('button', { name: 'Apr' })
        this.dateSelector = page.getByRole('gridcell', { name: 'Tue Apr 01' }).locator('div').nth(1)
        this.jobTitle = page.getByRole('textbox', { name: 'Job title (optional)' })
        this.saveNewEmployee = page.getByRole('button', { name: 'Save new employee' })
        this.addAnotherEmployee = page.getByRole('button', { name: 'Add another employee' })
        this.closeModal = page.getByRole('button', { name: 'Close modal' })
        this.assertEmployeeHub = page.getByRole('heading', { name: 'Employee hub' })
        this.assertEmployeeNameJohnDoe = page.getByRole('heading', { name: 'John Doe' })
        this.assertEmployeeNameDaveSmith = page.getByRole('heading', { name: 'Dave Smith' })


    }

    async employeeLinkPage(){
        await this.employeeLink.click();
    }

    async addNEmployee(){
        await this.addNewEmployee.click();
    }

    async addFirstName(firstNameId:string){
        await this.firstName.click();
        await this.firstName.fill(firstNameId);
    }

    async addLastName(lastNameId:string){
        await this.lastName.click();
        await this.lastName.fill(lastNameId);
    }

    async addEmailAddressDetails(emailAddressId:string){
        await this.emailAddress.click();
        await this.emailAddress.fill(emailAddressId);
        await this.emailCheckBox.click();
    }

    async addPhoneNumber(phoneId:string){
        await this.phoneNumber.click();
        await this.phoneNumber.fill(phoneId);
    }

    async dateInput(){
        await this.datePicker.click();
        await this.dateMove.click();
        await this.monthSelector.click();
        await this.dateSelector.click();
    }

    async jobTitleInput(jobTitleId:string){
        await this.jobTitle.click();
        await this.jobTitle.fill(jobTitleId);
    }

    async employeeSaveAndAdd(){
        await this.saveNewEmployee.click();
        await this.addAnotherEmployee.click();   
        await this.closeModal.click();
    }
}