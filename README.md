# 🎬 Angular Movie App

This project is a modular, testable, and scalable **Angular 19** application for working with movies and search functionality. The app is styled with **TailwindCSS**, uses **Angular Material** components, and applies modern architectural patterns like **facade services**, **state management with NGXS**, and **a centralized modal service**.
I aimed to define a foundational architecture and project structure designed for scalability and future growth toward an enterprise-grade application. The structure follows key best practices for building Angular applications, including the use of libraries that support efficient data handling and maintainability.

## ⚙️ Installation & Running

To install dependencies, run:
```bash
npm install
```

To start the development server:
```bash
ng serve
```

To run unit tests:
```bash
ng test
```

---

## 🚀 Features

- 🔍 Movie search with server-side search
- 🧱 Responsive grid layout using Tailwind and Angular Material
- 🧠 Centralized state using NGXS
- 🧩 Facade service pattern to abstract business logic
- 📦 Modal system powered by Angular Material + modal service
- 🧱 Shared Loader component 
- ⚡️ `ChangeDetectionStrategy.OnPush` for performance optimization
- 🧪 Jest class-based unit testing for services and components
- 🧰 Scalable, feature-modular architecture


---

## 🧩 Architecture

### ✅ Feature Folder Structure
Each major domain (e.g., `movies`) is encapsulated in its own folder using the **feature-modular** approach. This improves maintainability, extensibility and encapsulation.


### ✅ Unidirectional data flow through state management.
Each major domain (e.g., `movies`) is encapsulated in its own folder using the **feature-modular** approach. This improves maintainability, extensibility and encapsulation.


### ✅ Presentational + Container Component Pattern
This application adopts the Presentational and Container Component Pattern to enforce separation of concerns between UI rendering and application logic and centralized injection point.


### ✅ Class based unit testing using jest
This approach will increase significantly test run speed which is crucial for big project with good test coverage. Components view should be tested by e2e tests.


## 🚧 Future Improvements

To further enhance the application, the following improvements can be considered:

- ✅ Add an **HTTP interceptor** to handle backend error responses globally.
- ✅ Introduce a **UI error handling service** to gracefully manage interface-level errors.
- ✅ Extend the **linter configuration** to enforce stricter code quality rules.
- ✅ Add **pre-commit checks using Husky** to ensure proper formatting, catch syntax errors, and enforce test coverage before committing code.
- ✅ Wrap actions like **search functionality in `switchMap` operators** to cancel outdated or rapid successive requests, improving responsiveness and preventing race conditions.
