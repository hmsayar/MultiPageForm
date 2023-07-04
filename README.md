# MultiPageForm

A comprehensive multi-page form app built with React, TypeScript, react-hook-form, and Material UI, focusing on complex form scenarios, validation, and handling tricky input situations. Material UI was chosen to simplify the styling of input elements, as custom CSS styling can sometimes be challenging for form components.


## Features

- Multi-page form with complex input scenarios
- Form validation using react-hook-form
- Conditional fields
  - Additional fields displayed based on checkbox status
  - Connected dropdowns with dynamic options based on previous selection
- State management using useSessionStorage hook and Context API
  - Retains user input data while navigating between pages
- Custom date field using number type input.
  - Created to meet a specific design requirement, showcasing the flexibility of handling different input scenarios.
  - Conjunction of three number inputs represent a date.
  - Since they are number inputs, they are not meet restrictions of date value.
  - Used custom validation rules to ensure user inputs are valid dates.
  - Applied another custom validation rule to verify that the arrival date is not before the departure date.


## Installation and Setup

1. Clone the repository: https://github.com/hmsayar/MultiPageForm.git

2. Change to the project directory: cd MultiPageForm

3. Install dependencies: npm install

4. Start the development server: npm start

5. Open your browser and navigate to `http://localhost:5173`.



## Notes

1. The fields in this form application are not related to each other and serve no specific combined purpose. The app is designed to explore a variety of complex form scenarios, including tricky cases and state management in a multi-page form application.

2. Implementing custom logic fields with react-hook-form and Material UI can result in more verbose code, which may impact readability. This project serves as an example of the challenges that can arise when combining form fields with custom validation logic and an external UI library.
