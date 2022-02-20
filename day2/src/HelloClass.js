import React, { Component } from 'react'

class Hello extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,
        }
        this.onClick = this.onClick.bind
    }

    onClick(){
        console.log("Hello");
        this.setState({ counter: 1 });
    }

    // componentDidMount(){
    //     contains initialising the component to specific ways
    //     It runs at very begining when the Component is being mounted
    // }

    // componentDidUpdate(){
    //     functions to be run when props change are to be executed here
    // }

    // componentWillUnmount(){
    //     functions to be run only once before the component is destroyed
    //     used to perform clean up functions
    // }

    render() {
        return (
        <div>Hello</div>
        )
    }
}

export default Hello