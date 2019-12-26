import React, { Component } from 'react'

export default class allgroups extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-between p-3 border-b bg-white rounded-t font-bold">
                    <div>All Groups ( 0 )</div>
                    <div>
                        <span className="iconfont icon-jia text-teal-400 pr-2 cursor-pointer"></span>
                        <span className="font-normal text-teal cursor-pointer">Add Groups</span>
                    </div>
                </div>
            </div>
        )
    }
}
