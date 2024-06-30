# Cypress Automation Project

This project contains automated tests for various functional scenarios on the [Selenium Easy Demo](https://demo.seleniumeasy.com/) website using Cypress and Cucumber BDD.

## Project Structure

project-root/
├── cypress/
│ ├── fixtures/
│ ├── integration/
│ │ ├── features/ # Cucumber feature files
│ │ │ └── bootstrap_multiple_modal.feature
| | | └── bootstrap_alert_messages.feature
| | | └── bootstrap_auto_alert_messages.feature
| | | └── select_list_demo.feature
| | | └── simple_form_two_input_fields.feature
| | | └── simple_form.feature
| | | └── single_modal_example.feature
│ │ ├── test_cases/ # Test case files
│ │ │ └── bootstrap_multiple_modal_test.js
│ │ │ └── bootstrap_auto_alert_messages_test.js
│ │ │ └── bootstrap_alert_messages_test.js
│ │ │ └── input_form_mutiple_input_tests.js
│ │ │ └── input_form__test.js
│ │ │ └── select_list_demo_test.js
│ │ │ └── single_modal_example_test.js
│ ├── support/
│ │ ├── pages/ # Page objects
│ │ │ └── bootstrap_multiple_modal_page.js
│ │ │ └── bootstrap_alert_page.js
│ │ │ └── bootstrap_auto_alert_modal_page.js
│ │ │ └── select_list_page.js
│ │ │ └── simple_form_multiple_input_page.js
│ │ │ └── simple_form_page.js
│ │ │ └── single_modal_page.js
│ │ ├── step_definitions/ # Cucumber step definitions
│ │ │ └── bootstrap_multiple_modal_steps.js
│ │ │ └── bootstrap_alert_steps.js
│ │ │ └── bootstrap_auto_alert_steps.js
│ │ │ └── form_multiple_steps.js
│ │ │ └── form_steps.js
│ │ │ └── select_list_steps.js
│ │ │ └── single_modal_steps.js
│ │ └── index.js # Support file
├── node_modules/ # Node modules
├── cypress.config.js # Cypress configuration file
|── package-lock.json 
├── package.json # Project dependencies
└── README.md # Project documentation



## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)


## Installation

1. Clone the repository:

```bash
git clone https://github.com/MaejorAli/selenium-easy-cypress.git
```

2. Navigate to the project directory:

```cd selenium-easy-cypress```

3. nstall the dependencies:

```npm install```


# Running the Tests
## Using Cypress Test Runner

1. Open Cypress Test Runner:

``` npx cypress open ```


2. Select a feature file from the Cypress Test Runner to run the tests.


## Using Command Line

1. Run all tests:

``` npx cypress run ```
