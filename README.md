# Sample Test Project with Cypress and Appium

This project demonstrates how to create tests for a web application using Cypress and mobile application using Appium

## Prerequisites

Before running the tests, ensure you have the following set up:

1. **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
2. **Cypress**: Follow the [Cypress installation guide](https://docs.cypress.io/guides/getting-started/installing-cypress) to set up Cypress in your project.
3. **Appium**: Follow the [Appium installation guide](http://appium.io/docs/en/about-appium/getting-started/?lang=en) to set up Appium.
4. **Android Emulator**: Set up an Android emulator. You can follow the [Android Developer guide](https://developer.android.com/studio/run/emulator) to do this.
5. **Java**: Ensure you have the Java Development Kit (JDK) installed. You can download it from [here](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).

## Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <project-directory>
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Running Tests

### Cypress
To run Cypress tests, use the following command:
  ```
  npm run e2e:test
  ```

### Appium
To run Appium tests, use the following command:
  ```
  npm run app:test
  ```
