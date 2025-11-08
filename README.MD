This repository contains the submission for the ****IVORY DevOps Internship technical test****.

The main goal of this project was to provision an environment and build a complete ****CI/CD pipeline**** to automate the testing and deployment of a static website.

## Pipeline and Technology Stack

This project implements a CI/CD pipeline using **Google Cloud Build** that triggers automatically upon a commit to the `main` branch.

The pipeline workflow is as follows:
1.  **Trigger:** A merge/push to the `main` branch (typically from the `homolog` branch) kicks off the Google Cloud Build pipeline.
2.  **Code Analysis:** The pipeline runs a static code analysis using **SonarCloud** to check for code quality, bugs, and vulnerabilities.
3.  **Deploy:** After the analysis, the pipeline automatically deploys the static website files (HTML, CSS, JS) to a **Google Cloud Storage (GCS)** bucket for hosting.

## Git Branching Strategy

The repository follows the branching model specified in the test requirements:
** `main`: Production branch. All code here is deployed automatically.
** `homolog`: Staging/QA branch. Used for final validation before merging to `main`.
** `develop`: Main development branch where features are integrated.
** `feature/*`: Temporary branches for developing new features before merging into `develop`.

The flow usually looks like this: `feature` -> `develop` -> `homolog` -> `main`.

