# Portfolio Website using React.js

### Table of Contents

- [Tech Stack](#Tech Stack)
- [Screenshot](#Screenshot)
- [Installation and Setup Instructions](#Installation and Setup Instructions)
- [Source Structure](#Source Structure)
- [Steps to create a React Project](#Steps to create a React Project)
- [Steps to perform before writing the code](#Steps to perform before writing the code)
- [Deployment of Website](#Deployment of Website using Github pages)

## ⚙️ Tech Stack

- [Javascript](https://www.javascript.com/)
- [Reactjs](https://reactjs.org/)

## Screenshot

## 🔨 Installation and Setup Instructions

1. Clone the repository to your local machine
   ```console
   $ git clone https://github.com<YOUR-GITHUB-USERNAME>/jyoti-portfolio.git
   ```
2. Change the working directory
   ```bash
   `cd portfolio-jyoti`
   ```
3. Install dependencies
   ```bash
   `npm install`
   ```
4. Run the app
   ```bash
   `npm start`
   ```

You are all set!

## Source Structure

├── ...
├── src
│ ├── ...
│ ├── assets # assets for the website
| ├── index.js # starting point
│ └── ...
└── ...

## Steps to create a React Project

1. Go to the project root directory and open terminal/cmd.
2. Run `npx create-react-app` {portfolio}
3. Install the project dependencies: `npm install`
4. `npm start`
5. Visit App `localhost:3000`

## Steps to perform before writing the code

1. Draw a rough sketch of the website.
2. Design the wireframes and architecture of the website.
3. Finalize the React Components for each Web page.

## Deployment of Website using Github pages

1. `npm install gh-pages --save-dev`
2. Pushed the code to Github.
3. Add the following in your package.json
   - "homepage" : "......."
   - "predeploy" : "npm run build"
   - "deploy" : gh-pages -d build"
4. `npm run build`

> Perform the deployment stage every time if you are making changes in the codebase.

Check the Portfolio using this [link](https://github.com/jyoti-2/portfolio-jyoti)

### Credits

I have followed [Tutorial Link](https://www.youtube.com/watch?v=bA4pO1Y4ujA&list=PLGyA74h_S9Nq-rRLG5pqEiaJ87H22S3BW) tutorials to build this project.

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
