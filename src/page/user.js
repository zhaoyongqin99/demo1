import React, { Component } from 'react'
import Group from '../components/users/group'
import Member from '../components/users/member'
import AllMember from '../components/users/allmember'
import AllGroup from '../components/users/allgroups'
export default class user extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlag: true,
            showComponent: <Member />,
            showDeatil:<AllMember />
        }
    }
    showmenber() {
        this.setState({
            showFlag: true,
            showComponent: <Member />,
            showDeatil:<AllMember />
        })
    }
    showgroup() {
        this.setState({
            showFlag: false,
            showComponent: <Group />,
            showDeatil:<AllGroup />
        })
    }
    render() {
        return (
            <div className="flex  overflow-hidden py-4 bg-gray-200" style={{ "height": "560px", paddingLeft: "130px", paddingRight: "130px" }}>

                <div className="w-1/4 h-full pt-5 pb-4 flex flex-col text-black shadow-md rounded bg-white" >
                    <div className="w-full px-4 pb-2">
                        <div className="relative">
                            <span className="iconfont icon-search text-grey-500 absolute text-md" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}></span>
                            <div><input className="border none h-8 py-1 px-3 pl-10 w-full outline-none placeholder-grey rounded focus-shadow text-grey-dark hover:border-teal-600" type="text" name="" id="" placeholder="Please input user name" /></div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto relative overflow-auto">
                        <ul className="p-4 pt-0 flex item-center">
                            <li className={`pr-6 cursor-pointer text-black ${this.state.showFlag?'font-bold':''}`} onClick={this.showmenber.bind(this)}>Members</li>
                            <li className={`pr-6 cursor-pointer text-black ${this.state.showFlag?'':'font-bold'}`} onClick={this.showgroup.bind(this)}>Groups</li>
                        </ul>
                        <div>{this.state.showComponent}</div>
                    </div>
                </div>
                <div className="flex flex-col flex-1  pb-4 bd-blue pl-4 text-black">
                    {this.state.showDeatil}
                </div>
            </div>


        )
    }
}
