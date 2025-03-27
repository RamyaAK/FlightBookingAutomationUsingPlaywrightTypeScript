import { Page, expect } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    
    // Locators
    private readonly usernameField = "input[name='userName']";
    private readonly passwordField = "input[name='password']";
    private readonly loginButton = "input[value='Submit']";
    private readonly successMessage = "tbody tr td h3:has-text('Login Successfully')";
    private readonly errorMessageOnLoginFailure ="tbody tr td span:has-text('Enter your userName and password correct')";

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the login page.
     */
    async navigateToLogin(): Promise<void> {
        try {
            await this.page.goto('https://demo.guru99.com/test/newtours/login.php', { waitUntil: 'load' });
        } catch (error) {
            console.error("Navigation to login page failed: ", error);
            throw error;
        }
    }

    /**
     * Logs in with the provided credentials.
     * @param username - The username for login.
     * @param password - The password for login.
     */
    async login(username: string, password: string): Promise<void> {
        try {
            await this.page.fill(this.usernameField, username);
            await this.page.fill(this.passwordField, password);
            await this.page.click(this.loginButton);
        } catch (error) {
            console.error("Login failed: ", error);
            throw error;
        }
    }

    /**
     * Verifies that the login was successful.
     */
    async verifyLoginSuccess(): Promise<void> {
        try {
            await expect(this.page.locator(this.successMessage)).toBeVisible({ timeout: 5000 });
        } catch (error) {
            await expect(this.page.locator(this.errorMessageOnLoginFailure)).toBeVisible({ timeout: 5000 });
        }
    }
}
