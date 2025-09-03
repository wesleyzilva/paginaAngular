This project is an evolution of the web application architecture, demonstrating the transition from a static HTML page to a modern Angular ecosystem with standalone components and the implementation of Server-Side Rendering (SSR) with Node.js.

Static HTML Version: https://github.com/wesleyzilva/pagina

Node/Angular Version: https://github.com/wesleyzilva/paginaAngular

The goal is to serve both as a portfolio and as a technical model. It was designed to transfer knowledge to junior developers and QAs, with the intention of practicing modern web application development. The code is separated by evolutionary branches on GitHub.

To see the original version of this portfolio, check out the README da versão HTML.

🚀 Project Vision
The goal is to refactor the current portfolio into a complete architecture, applying concepts of modular development and API communication. This transition will serve as a practical project to demonstrate proficiency in cutting-edge technologies and methodologies.

🛠️ Proposed Architecture
The new architecture will be composed of distinct layers that communicate to ensure modularity, scalability, and maintainability.

Frontend (Angular): The user interface will be a Single-Page Application (SPA) developed with Angular, leveraging its component structure to create a rich and interactive user experience.

API Facade (Intermediate Layer): A facade API will serve as the single entry point for the frontend. It will orchestrate requests, simplify communication with the backend, and centralize security.

API Business (Backend): This API will be responsible for all business logic, such as managing project and skill data.

Database (PostgreSQL): PostgreSQL will be the data repository, storing the portfolio information persistently.

🗺️ Sprint Plan (Agile Cycle)
Development will be guided by an agile sprint cycle, focusing on incremental value delivery, code quality, and automation.

Sprint 1: Foundation and Project Structure
Objective: Define the base architecture and set up the development environment, focusing on best practices and initial automation.

Tasks:

[ ] Define the monorepo structure (frontend, backend/facade, backend/business).

[ ] Initialize the Angular project with a linter (ESLint) and formatter (Prettier).

[ ] Initialize the backend projects (e.g., Spring Boot) with dependencies for web, data, and security.

[ ] Configure the initial CI (Continuous Integration) pipeline with a build job to validate the structure.

[ ] Create the first Angular component with its unit test (Jasmine/Karma).

Sprint 2: Backend, Persistence, and TDD
Objective: Develop the API layer and the connection to the database, applying TDD (Test-Driven Development).

Tasks:

[ ] Model the initial domain in PostgreSQL (e.g., projects table).

[ ] Implement the persistence layer (Repository) with integration tests (using H2 or Testcontainers).

[ ] Create the first API in the Business layer (e.g., GET /api/projects) with unit tests for Service and Controller.

[ ] Add the backend test execution to the CI pipeline.

Sprint 3: Frontend-Backend Integration and Componentization
Objective: Connect the frontend to the API and refactor the static UI into dynamic and testable components.

Tasks:

[ ] Create an Angular service (ProjectService) to consume the API.

[ ] Refactor the projects section to use dynamic components (e.g., ProjectCardComponent).

[ ] Write unit tests for ProjectService (with HttpClientTestingModule) and for the components.

[ ] Configure the Angular development proxy to avoid CORS issues locally.

Sprint 4: E2E Test Automation and Code Quality
Objective: Increase confidence in the code through end-to-end test automation and static analysis.

Tasks:

[ ] Configure an E2E (End-to-End) test framework, such as Cypress or Playwright.

[ ] Write the first E2E test: "visit the page and verify that the projects list is loaded."

[ ] Integrate the E2E test execution into the CI pipeline.

[ ] Document the API using Swagger/OpenAPI in the backend.

Sprint 5: Continuous Deploy and Monitoring
Objective: Automate the deployment process and prepare the application for the production environment.

Tasks:

[ ] Create a CD (Continuous Deployment) workflow to publish the frontend to GitHub Pages.

[ ] "Dockerize" the backend applications.

[ ] (Optional) Configure the backend deployment on a cloud platform via the CD pipeline.

[ ] Add health checks (/actuator/health) to the backend APIs.