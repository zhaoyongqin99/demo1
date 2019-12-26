import React, { Component } from 'react'
import '../../css/iconfont.css'
export default class member extends Component {
    render() {
        return (
            <div className="flex relative bg-gray-200 p-4 text-sm text-grey-dark">
                <span className="border-solid border-teal-500 border-2"></span>
                <span className="iconfont icon-all-members px-2 flex items-center"></span>
                <span>All Members</span>
            </div>
        )
    }
}
