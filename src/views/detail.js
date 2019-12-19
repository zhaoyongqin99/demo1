import React, { Component } from 'react'

export default class detail extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag:false
        }

    }
    changeColor() {
        // alert("ok")
        this.setState({
            flag:!this.state.flag
        })

    }
    render() {
        // const {flag} 
        return (
            <div className="mt-2 text-center">
                <h1 className={`text-teal-700 text-center bg-gray-400 px-4 py-2 + ${this.state.flag? "bg-red-200":"bg-gray-400"}`}>show me detail</h1>
                <button className="border-gray-500 px-4 py-2 bg-gray-300 m-2" onClick={this.changeColor.bind(this)}>click</button>
            </div>
        )
    }
}

