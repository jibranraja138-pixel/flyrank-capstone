# FlyRank AI Internship Capstone

## Project Overview

This repository contains the Student Productivity application work for my FlyRank AI Internship capstone, along with setup and workflow documentation. The application work for Assignment 2 is a settings form implemented with HTML, CSS, and JavaScript.

## Assignment Status

| Assignment | Status | Details |
| --- | --- | --- |
| Assignment 1: Setup | Completed | Repository, development environment, and project instructions were set up. |
| Assignment 2: Workflow Comparison | Completed | The settings form was implemented in two rounds to compare AI-assisted development workflows. |

## Branches and Project Documents

* **Round 1 branch:** `fl02-round1`
* **Round 2 branch:** `fl02-round2`
* **Workflow comparison report:** [WORKFLOW.md](WORKFLOW.md)
* **AI project instructions:** [AGENTS.md](AGENTS.md)

### Round 2 improvements

Compared with the Round 1 implementation, Round 2 adds focused form validation and verification:

* Requires a display name and email address, with clear inline errors for missing or invalid values.
* Associates labels and error text with the inputs, marks invalid fields for assistive technology, and moves keyboard focus to the first invalid field after submission.
* Shows a success message only when both fields pass validation.
* Adds automated tests for the validation rules using Node.js's built-in test runner, without adding a test dependency.

Round 1 includes additional profile and study preference controls and saves settings in browser local storage. Round 2 focuses on the validated settings form; its current save action confirms valid submission but does not persist settings.

## Technology Stack

* **Runtime:** Node.js LTS
* **Version control:** Git
* **Editor:** Visual Studio Code
* **AI coding assistant:** OpenAI Codex
* **Settings form:** HTML, CSS, and JavaScript

The Round 2 settings form has no external runtime or test dependencies; its automated tests use the Node.js built-in test runner.

## Getting Started

### Prerequisites

* Node.js LTS
* npm
* Git
* Visual Studio Code

### Set up the repository

Clone the repository from its GitHub page, then change into the cloned directory:

```bash
git clone <repository-url>
cd <repository-directory>
```

Replace the placeholders with the repository URL and directory name shown on GitHub.

### Verify your installation

Run these commands in your terminal:

```bash
node --version
npm --version
git --version
```

### Run the Round 2 tests

On the `fl02-round2` branch, run the automated validation tests from the repository directory:

```bash
npm test
```

No `npm install` is needed because the project has no external dependencies. The repository does not currently define an application start command; open `index.html` in a browser to view the static settings form.

## Development Workflow

1. Make focused changes.
2. Review AI-generated changes before accepting them.
3. Run relevant checks after making changes.
4. Use Conventional Commits for all Git commits.
5. Keep project documentation up to date.

## License

See the [LICENSE](LICENSE) file for the licensing terms.
