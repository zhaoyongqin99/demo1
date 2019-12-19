import React, { Component } from 'react'

export default class mine extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg-pink overflow-hidden  mt-2">
                <h1 className="inline-block text-black-500 text-center px-4 py-2 bg-gray-400 ...">person center person center person center person center person center person center person center person center person center </h1>
                <div className="relative  bg-gray-600 p-5 text-center">
                    Static parent
                    <div className="absolute bottom-0 left-0 bg-gray-800 p-3">
                        Absolute child
                    </div>
                </div>
            </div>
        )
    }
}

