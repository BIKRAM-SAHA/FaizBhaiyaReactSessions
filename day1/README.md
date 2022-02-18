# What is React?
A Javascript library used to code the Front-end of a web application


# Why React?
1. Virtual Dom- 
    - In memory representation of Real DOM,
    - Making changes in Virtual DOM is way less resource intensive than Real DOM.
2. Updation procedure is Faster-
    - On update only specific Real DOM Nodes are changed after comparing it with the virtual DOM, the whole Real DOM tree is not loaded again
    - steps:
        - Changes in react component
        - That change gets updated in Vir DOM (which is a fast process)
        - Vir DOM after updation compares itself with Real DOM
        - Then REACT only updates the parts of Real DOM which is different from the Vir DOM.
3. Modular in nature hence complex applications can be broken down to reuseable smaller 'Components' which also helps in unit testing.


# Folder Structure
1. package.json
    - contains metadata of the projects like: name, version, dependencies, scripts etc.
2. public folder
    - contains all static files of the project
    - do not want these to be processed by webpack
    - cannot access files inside src eg from 
3. index.html
    - React app is a SPA (single page application) with only one html page that is this index.html
4. manifest.json
    - used for meta data for mobile phone in case you are developing a Progressive Web App.
5. robots.txt
    - used for security reasons
6. src folder
    - contains all source files of the project
    - do want these to be processed by webpack
7. index.js
    - ReactDOM.render(`<react component>`, `<html element>`) renders `<react component>` inside `<html element>`
    - This is the main js file that renders the `App component` to `index.html`
8. reportwebvitals.js
    - normal js file to start measuring performance in your app
9. App.js
    - The main Component which is rendered to root div in index.html
10. App.test.js and setup.test.js
    - Used for unit testing


# JSX
- JSX-> JS + XML
syntactic sugar created for React than makes it easier to make HTMl elements using JS but when 
- compiled it basically reverts back to JS code.

```
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

compiles into:

```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```
- has its own rules, checkout https://reactjs.org/docs/jsx-in-depth.html to learn more.


# miscelenous
1. .babelrc used for local custom configuration changes of babel(a transpiler used to convert newer ES6 to more supported ES5 and also for JSX support)
2. `npm run build` creates a production build folder that is basically the `index.html` file with all the REACT logic inside the a script tag and a `.chunk.js` script file with all utility functions.