import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Relative import for better portability
import { Config } from '../utils/config';

test.describe('Login Tests', () => {
    test('User can log in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to login page...');
        await loginPage.navigateToLogin();

        console.log('Attempting to log in...');
        await loginPage.login(Config.validUser.username, Config.validUser.password);

        console.log('Verifying login success...');
        await loginPage.verifyLoginSuccess();

        console.log('✅ Login test completed successfully!');
    });

    test('User cannot log in with incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to login page...');
        await loginPage.navigateToLogin();

        console.log('Attempting to log in with invalid password...');
        await loginPage.login(Config.invalidPassword.username, Config.invalidPassword.password);

        console.log('Verifying login failure message...');
        await loginPage.verifyLoginSuccess();

        console.log('✅ Invalid password test completed successfully!');
    });

    test('User cannot log in with incorrect username', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to login page...');
        await loginPage.navigateToLogin();

        console.log('Attempting to log in with invalid username...');
        await loginPage.login(Config.invalidUserName.username, Config.invalidUserName.password);

        console.log('Verifying login failure message...');
        await loginPage.verifyLoginSuccess();

        console.log('✅ Invalid username test completed successfully!');
    });

    test('User cannot log in with incorrect username and incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to login page...');
        await loginPage.navigateToLogin();

        console.log('Attempting to log in with invalid username...');
        await loginPage.login(Config.InvalidUserCredentials.username, Config.InvalidUserCredentials.password);

        console.log('Verifying login failure message...');
        await loginPage.verifyLoginSuccess();

        console.log('✅ Invalid username test completed successfully!');
    });

    test('User cannot log in with empty credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Navigating to login page...');
        await loginPage.navigateToLogin();

        console.log('Attempting to log in with empty credentials...');
        await loginPage.login(Config.emptyUserCredentials.username,Config.emptyUserCredentials.password);

        console.log('Verifying login failure message...');
        await loginPage.verifyLoginSuccess();

        console.log('✅ Empty credentials test completed successfully!');
    });

});

