import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import * as brightHREmployeeRecords from './testData/brightHREmployees.json';
import { EmployeeHubPage } from './pages/employeeHub';

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage(); 

 //Login to BrightHR
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginBrightHR();
})

//Logout
test.afterEach(async () => {
  const loginPage = new LoginPage(page);
  await loginPage.logoutBrightHR();
  await page.close();
})

brightHREmployeeRecords.employees.forEach(employee=>{
test(`Add a new Employee ${employee.firstName} + ${employee.lastName}`, async ({ }) => {
    //Add employee
    const employeeHubPage = new EmployeeHubPage(page);
    await employeeHubPage.employeeLinkPage();
    await employeeHubPage.addNEmployee();
    await employeeHubPage.addFirstName(employee.firstName);
    await employeeHubPage.addLastName(employee.lastName);
    await employeeHubPage.addEmailAddressDetails(employee.emailAddress);
    await employeeHubPage.addPhoneNumber(employee.phoneNumber);
    await employeeHubPage.dateInput();
    await employeeHubPage.jobTitleInput(employee.jobTitle);
    await employeeHubPage.employeeSaveAndAdd();    
  }); 

});

test('Verify new employees', async ({ }) => {
    
    const employeeHubPage = new EmployeeHubPage(page);
    await employeeHubPage.employeeLinkPage();

    //assert new employee john Doe
    await expect(employeeHubPage.assertEmployeeNameJohnDoe).toBeVisible();

    //assert new employee dave Smith
    await expect(employeeHubPage.assertEmployeeNameDaveSmith).toBeVisible();
  
  });


