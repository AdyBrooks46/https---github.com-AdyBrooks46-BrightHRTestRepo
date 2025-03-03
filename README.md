BrightHR
Login Details
Step 1: Could you visit https://sandbox-app.brighthr.com/lite manually create a free account, and complete the registration process?
If the registration email doesn't arrive use the following details instead Login leu7edsq@getnada.com Password A1234567890-
Step 2: Using the Playwright or Cypress framework, you need to log in to the created account and write automated tests for the following scenarios:

Requirements
1. Navigate to the employee tab on the left-hand side of the panel and add an employee by filling in all the fields, including optional ones.

2. Add another employee.

3. Navigate to the employee tab and verify that both employees are displayed.

4. Integrate this build so tests can run in the CI setup of your choice.

 
Feature: Employee Management

  Scenario: Add and Verify Two Employees
    Given the user is on the employee management page
    When the user navigates to the "Employee" tab
    And the user adds a new employee with the following details:
      | Field       | Value           |
      | First Name  | John            |
      | Last Name   | Doe             |
      | Job Title   | Principle Test Engineer |
      | Email       | john.doe@brighthrtest.com |
      | Phone       | 01204456123     |
    And the user adds another employee with the following details:
      | Field       | Value           |
      | First Name  | Dave            |
      | Last Name   | Smith           |
      | Job Title   | Senior Software Engineer |
      | Email       | john.doe@brighthrtest.com |
      | Phone       | 01204456123     |   
    When the user navigates to the "Employee" tab
    Then the user should see "John Doe" in the employee list
    And the user should see "Dave SMith" in the employee list

  Scenario: CI Integration Setup
    Given a Continuous Integration (CI) environment is configured
    When the build process is triggered
    Then the employee management tests are executed
    And the test results are reported in the CI build logs

 
Set up tech stack
•	Install NodeJS - v20.15.1
•	Install npm - Npm - v10.7.0
•	Install VS Code

Setup specflow and clone repo
got to github and clone the repo 
Installation of playwright 
Npx init playwright@latest

Playwright Commands
1.	Specific file
npx playwright test ./tests/firstTest.spec.ts
2.	select how many workers
npx playwright test --workers 3
3.	run all tests within the tests directory
npx playwright test        
4.	run tests by test name
npx playwright test -g 'my second test'      
5.	run test against a specific browser
npx playwright test --project=chromium
6.	run the test headed
npx playwright test --project=chromium --headed

7.	show report
npx playwright show-report
8.	start the codegen and inspector
npx playwright codegen
9.	creates a file with all steps in it
npx playwright codegen -o ./codeGenTestAuto.spec.ts
10.	Run code gen in a specific device 
npx playwright codegen --device="iphone 11 pro"
11.	codegen help
npx playwright codegen --help    




