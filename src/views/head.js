import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from "react-router-dom"
import { Task, User } from './index'
import '../css/iconfont.css'
export default class head extends Component {
    constructor(props){
        super(props)
        this.state={
            styleFlag:false
        }
    }
    render() {
        var link = window.location.pathname;
        return (
            <div>
                <div className="bg-white">
                    <div className="md:text-center inline-block  mx-8">
                        <i className="iconfont icon-logo text-3xl text-teal-400"></i>
                    </div>
                    <div className={`lg:inline-block md:inline-block text-black text-center px-4 py-2 ml-12  relative ${link == "/user" ? "text-teal-400" : ""}`}  ><i className="iconfont icon-tasks mr-1"></i><Link to="/user">Users Manage</Link>
                    <div className={`w-4 h-1 rounded-sm absolute inset-auto ${link == "/user" ? "bg-teal-400" : "bg-withe"}`}></div></div>
                    <div className={`lg:inline-block md:inline-block text-black text-center px-4 py-2 m-1 relative" ${link == "/task" ? "text-teal-400" : ""}`}><i className="iconfont icon-users mr-1"></i><Link to="/task">Tasks Manage</Link>
                    <div className={`w-4 h-1 rounded-sm absolute inset-auto ${link == "/task" ? "bg-teal-400" : "bg-withe"}`}></div></div>
                    
                    <Switch>
                        <Route path="/user" component={User} ></Route>
                        <Route path="/task" component={Task} ></Route>
                        <Redirect to="/task"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
