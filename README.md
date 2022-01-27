# Portfolio Website using React.js

### Table of Contents

- [Tech Stack](#tech-stack)
- [Libraries used](#libraries-used)
- [Screenshot](#screenshot)
- [Installation and Setup Instructions](#installation-and-setup-instructions)
- [Source Structure](#source-structure)
- [Steps to create a React Project](#steps-to-create-a-react-project)
- [Steps to perform before writing the code](#steps-to-perform-before-writing-the-code)
- [Deployment of Website](#deployment-of-website-using-github-pages)

## ⚙️ Tech Stack

- [Javascript](https://www.javascript.com/)
- [Reactjs](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

## Libraries used

- react-burger-menu `npm i react-burger-menu`
- React Router Dom `npm install react router dom`
- Formspree for getting the email from the contact pages.

## :camera: Screenshot

![alt text](https://user-images.githubusercontent.com/63103873/121711695-83fc9200-caf8-11eb-81a3-11e25075c141.png)

![alt text](https://user-images.githubusercontent.com/63103873/121773074-22d7cb80-cb97-11eb-9157-528e786c231f.png)

![alt text](https://user-images.githubusercontent.com/63103873/121773077-279c7f80-cb97-11eb-9f25-bb3e0b0f27ad.png)

![alt text](https://user-images.githubusercontent.com/63103873/121773134-7ba76400-cb97-11eb-891f-729de009725c.png)

![alt text](https://user-images.githubusercontent.com/63103873/121773076-253a2580-cb97-11eb-8595-8f097e2dea31.png)

## 🔨 Installation and Setup Instructions

1. Clone the repository to your local machine
   ```console
   $ git clone https://github.com<YOUR-GITHUB-USERNAME>/jyoti-portfolio.git
   ```
2. Change the working directory
   ```bash
   cd portfolio-jyoti
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the app
   ```bash
   npm start
   ```

You are all set ✅!

## Source Structure

      .
    ├── ...
    ├── src
    │   ├── ....
    |   |── Components          # Create a different folder for each component
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...

## Steps to create a React Project

1. Go to the project root directory and open terminal/cmd.
2. Run `npx create-react-app myportfolio`
3. Install the project dependencies: `npm install`
4. `npm start`
5. Visit App `localhost:3000`

## Steps to perform before writing the code

1. Draw a rough sketch of the website.
2. Design the wireframes and architecture of the website.
3. Finalize the React Components for each Web page.

## :computer: Deployment of Website using Github pages

1. `npm install gh-pages --save-dev`
2. Pushed the code to Github.
3. Add the following in your package.json

   ```json
     "homepage" : "http://jyoti-2.github.io/portfolio-jyoti"
   ```

   ```json
   // Add in the script 
   "predeploy" : "npm run build"
   ```

   ```json
    // Add in the script 
     "deploy" : "gh-pages -d build"
   ```

4. `npm run build`

> :sound: Perform the deployment stage every time if you are making changes in the codebase.

5. `npm run deploy`

## Credits

I have followed this :link: [Tutorial](https://www.youtube.com/watch?v=bA4pO1Y4ujA&list=PLGyA74h_S9Nq-rRLG5pqEiaJ87H22S3BW) to build the project.

## License

:link: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Check it Live here :link: [link](http://jyoti-2.github.io/portfolio-jyoti)

**[⬆ back to top](#table-of-contents)**
