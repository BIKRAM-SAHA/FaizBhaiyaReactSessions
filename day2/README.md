# Components
modular and reuseable piece of code with its own UI, life-cycle and State logic.

## Types of components
1. Functional Components
-  This function which accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
- eg:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
2. Class Components
- ES6 classes can also be used to define a component
- eg: (this and the above example is equivalent from react's point of view)
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

# Props
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
- Props are simply arguments passed into React components  
eg: 
```
function HelloFunc(props) {
    console.log(props);
}
```

- They are Read-only for the component (children cannot change the prop passed by the parent)
```
function HelloFunc({var1}) {
    var1="change in val";
    console.log(props);
}
```
is invalid


# Miscellaneous
1. useState: a hook used to maintain state in functional Components which takes the initial state as the argument and returns an Array with the initial state and a function to update the state
```
const [ counter, setCounter ]= useState(0)
```
Remember you have to import `useState` from `'react'`
```
import { useState } from 'react'
```
States are mutable.
2. whenever unmemoized component's state or prop is changed that component is re-rendered from strach.
3. through memoization you can control the components updation even if its state or prop is changed.
4. As react developer remember to minimize the number of re-renders.