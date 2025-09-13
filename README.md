# Task List App

A **React + TypeScript + Vite** application for managing todos. Users can add, edit, and delete tasks. This project demonstrates a modular React component structure with state management and basic validation.

---

## Features

- Add new tasks
- Edit tasks by clicking on their text
- Delete tasks with a confirmation prompt
- Input validation with error messages
- Modular component structure
- Styled with CSS, inspired by mockup

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. Clone the repository:

git clone https://github.com/daniel-nolan85/konami-challenge.git

2. Navigate to the project folder:

cd konami-challenge

3. Install dependencies

npm install

or

yarn install

4. Run the development server:

npm run dev

or

yarn dev

The app should now be running at http://localhost:5173.

# Login Credentials

For the purposes of this challenge, the app includes a mock login system. You can use the following credentials to log in:

Username: user

Password: test123

Upon successful login, you will be redirected to the tasks page.

# How to Use the Task List

- Add a task: Type in the input field at the bottom and click Add. Empty tasks are not allowed.
- Edit a task: Click on the task text to enter edit mode, make changes, and click Save. Empty edits are not allowed.
- Delete a task: Click Delete next to a task. You will be asked to confirm before deletion.

# Notes

- Error messages clear automatically when the user starts typing again.
- Editing tasks is inline for a seamless UX.
- The design is modular and scalable; potential features could include canceling edits, filtering tasks, or adding slide animations when tasks are added or deleted to enhance visual feedback.
