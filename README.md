# ✈️ Playwright Flight Booking Automation Framework  

This is a **Test Automation Framework** using [Playwright](https://playwright.dev/) to automate flight booking scenarios on **Mercury Tours**.

## 🚀 Features
- **UI Test Automation** with Playwright
- **Page Object Model (POM)** for better maintainability
- **Allure Reporting** integration for test reports
- **Parameterized Tests** for multiple test scenarios
- **GitHub Integration** for version control

---

## 🛠️ Installation & Setup  

### 1️⃣ Clone the Repository  

git clone https://github.com/your-username/playwright-flight-booking.git
cd playwright-flight-booking
2️⃣ Install Dependencies
Ensure you have Node.js (v16+) installed, then run:


npm install
3️⃣ Install Playwright Browsers


npx playwright install
🏃 Running Tests
✅ Run All Tests

npx playwright test
✅ Run a Specific Test

npx playwright test tests/login.spec.ts
✅ Run Tests with UI Mode

npx playwright test --ui
📊 Generate and View Reports
🏆 View Playwright HTML Report

npx playwright show-report
🏆 Generate & View Allure Report
Run tests with Allure results:

npx playwright test --reporter=allure
Generate Allure report:

Edit
allure generate allure-results --clean -o allure-report
Open Allure report:
allure open allure-report

🔗 Additional Resources
Playwright Documentation

Allure Report Documentation

Mercury Tours Test Website

🤝 Contributing
Feel free to fork this repo, raise issues, or submit pull requests. 🚀

📜 License
This project is licensed under MIT License.
