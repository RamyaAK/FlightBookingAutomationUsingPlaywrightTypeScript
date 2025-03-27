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

```sh
git clone https://github.com/your-username/playwright-flight-booking.git
cd playwright-flight-booking
```

### 2️⃣ Install Dependencies  
Ensure you have **Node.js (v16+)** installed, then run:

```sh
npm install
```

### 3️⃣ Install Playwright Browsers  

```sh
npx playwright install
```

---

## 🏃 Running Tests  

### ✅ Run All Tests  

```sh
npx playwright test
```

### ✅ Run a Specific Test  

```sh
npx playwright test tests/login.spec.ts
```

### ✅ Run Tests with UI Mode  

```sh
npx playwright test --ui
```

---

## 📊 Generate and View Reports  

### 🏆 View Playwright HTML Report  

```sh
npx playwright show-report
```

### 🏆 Generate & View Allure Report  

#### Run tests with Allure results:  

```sh
npx playwright test --reporter=allure
```

#### Generate Allure report:  

```sh
allure generate allure-results --clean -o allure-report
```

#### Open Allure report:  

```sh
allure open allure-report
```

---

## 📚 Project Structure  

```
💽 playwright-flight-booking
│── 💽 tests                   # Test cases
│── 💽 pages                   # Page Object Model (POM)
│── 💽 utils                   # Utility functions
│── 💽 reports                 # Test reports (excluded in .gitignore)
│── 📄 playwright.config.ts     # Playwright configuration
│── 📄 .gitignore               # Files to ignore in Git
│── 📄 package.json             # Project dependencies
│── 📄 README.md                # Project documentation
```

---

## 🗮 Additional Resources  
- [Playwright Documentation](https://playwright.dev/docs/)
- [Allure Report Documentation](https://docs.qameta.io/allure/)
- [Mercury Tours Test Website](https://demo.guru99.com/test/newtours/login.php)

---

## 🤝 Contributing  
Feel free to **fork** this repo, raise issues, or submit pull requests. 🚀  

---

## 🐟 License  
This project is licensed under **MIT License**.

---

### 🎯 Happy Testing! 🚀✨

