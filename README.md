#Verbalize
English verbs search engine.
Web app developed in  **React** that allows to search verbs in English and consult its differents verbals forms.

The user can into a verb in  **simple present* and get:
.- Infinitive.
.- Third person.
.- Simple past.
.- Past participle.
.- Gerund.
.- Translation to Spanish.

 # MVP Demo in production version

[See the project in Vercel](https://verbal-five.vercel.app/) 

#Technologies used
 **React** - JavaScript library for user interfaces.
-  **CSS3** - Custom styles for responsive design.
-  **JSON** - Verbs local data base.
-  **Vercel** - Deploiment and hosting of project.


 # Installation and Use

# **Clone repository:**
```bash
git clone https://github.com/akdgit/verbal.git
cd verbal

  # **Install dependencies:**
```bash
npm install
```

# **Execute project in local enviroment:**
```bash
npm start
```
The project will be opened in: `http://localhost:3000/


 ## Project structure

```
verbal/
│── public/
│   ├── verbs.json     # File contaiiner of verbs data base
│   ├── index.html     # Main file HTML
│
│── src/
│   ├── components/
│   │   ├── search.js  # Lógic of search engine
│   ├── App.js         # Main Component of app.
│   ├── App.css        # App styles
│   ├── index.js       # Project entry point
│
│── README.md          # Project documentaton
│── package.json       # Dependencies and scripts of NPM
│── .gitignore         # Files ignored in Git
```
 # Search engine operation

- ** Input**: The user input a verb in English in search field.
- ** Search**: The verb is consulted in `verbs.json`.
- ** Result**: The differents verbs form are displayed.
- ** Error**: If the verb doesn't exist, a window alert is showed.

##  Deployment in Vercel

For deploy this project in Vercel:

1. Go to [[https://vercel.com/](https://vercel.com/) and login with git hub account.
2. Importar repository `verbal`.
3. Set **Build Command** as:
   ```bash
   npm run build
   ```
4. Set **Output Directory** as `build`.
5. Clic on **Deploy**.
6. The public URL will be generated as `https://verbal-five.vercel.app/`.

---
## Accessibility and responsive design 

.- Compatible with screen reader (`aria-label`, `aria-live`)  
.- Responsive design to mobiles and tablets (`@media queries`)  
.- Accessible Navegation with `Tab` and `Enter`  

---

## Author
- **Developer:** [Juan Carlos Camacaro] *(akdgit).*  

- **License:** This project is distributed under license MIT.

---


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
