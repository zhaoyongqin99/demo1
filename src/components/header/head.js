import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from "react-router-dom"
import { Task, User } from '../../page/index'
import './head.css'
import '../../css/iconfont.css'
export default class head extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styleFlag: false,
            iconUser:false,
            iconTask:false,
        }
    }
    logout(){
        // alert("退出")
        this.setState({
            styleFlag:!this.state.styleFlag
        })
    }
    render() {
        var link = window.location.pathname;
        return (
            <div className="h-full">
                <div className="bg-white w-full mt-0 border-solid border-2 border-gray-100 flex">
                    <div className=" flex-1 w-full md:w-auto lg:w-auto xl:w-auto overflow-hidden bg-white">
                        <div className="text-center inline-block w-full md:w-auto lg:w-auto">
                            <i className="iconfont icon-logo text-4xl text-teal-400 sm:text-center lg:pl-6 md:pl-6 xl:pl-6"></i>
                        </div>
                        <div className={`lg:inline-block md:inline-block sm:w-full py-2 px-2 cursor-pointer text-black text-center md:ml-24 sm:ml-0 md:w-auto relative`}  >
                            <svg t="1577152756169" className={`icon inline-block mr-2 ${link == "/user" ? "inline-block":"hidden"}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3953" width="16" height="16"><path d="M795.776 514.816a251.52 251.52 0 0 0 99.712-200.896c0-137.28-110.144-249.792-245.696-249.792a243.84 243.84 0 0 0-199.104 104.128 255.36 255.36 0 0 0-35.648 71.488v0.512c26.88 6.272 51.2 19.456 70.912 37.76 5.696-27.328 17.536-51.968 34.176-73.024a167.104 167.104 0 0 1 157.312-59.776c68.992 11.072 125.952 68.032 137.984 137.92 18.368 108.288-63.04 201.6-165.504 201.6-14.4 0-27.84-1.6-41.344-5.312v-0.448a156.16 156.16 0 0 1-70.848-37.888 175.296 175.296 0 0 1-34.24 73.088s0 0.512 0.512 0.512c-0.512 0.512-1.088 0.512-1.6 1.088a170.88 170.88 0 0 1-89.92 55.68c-2.56 2.112-4.608 4.224-7.296 6.336a361.856 361.856 0 0 0-65.664 74.688l-3.648 5.312c12.352-1.6 24.832-2.56 37.76-2.56 20.096 0 39.808 2.048 58.368 6.208 5.184-6.784 11.904-13.632 18.688-18.944a263.68 263.68 0 0 1 55.36-41.024c12.992-7.424 26.432-13.696 40.32-18.368a284.224 284.224 0 0 1 103.424-19.52c152.896 0 279.168 117.952 295.552 268.928a38.08 38.08 0 0 0 38.144 33.408 39.552 39.552 0 0 0 38.72-44.608 382.272 382.272 0 0 0-226.432-306.56z" fill="#4DC0B5" p-id="3954"></path><path d="M519.68 606.272c9.792-6.784 18.624-14.72 26.88-23.168a250.752 250.752 0 0 0 59.008-95.168c1.088-2.56 2.048-5.312 3.2-8.32v-0.576c7.232-23.168 10.88-47.808 10.88-73.6a250.752 250.752 0 0 0-99.264-200.32 241.024 241.024 0 0 0-129.728-48.96c-121.088-8-234.24 78.528-257.536 199.68a251.392 251.392 0 0 0 94.72 250.432 381.568 381.568 0 0 0-226.56 306.752 39.552 39.552 0 0 0 38.72 44.48 38.016 38.016 0 0 0 38.208-33.024c14.912-138.432 122.176-249.088 257.792-266.688 12.352-1.6 24.832-2.56 37.696-2.56 20.096 0 39.872 2.048 58.432 6.208 125.568 25.28 222.912 131.648 237.184 262.784a38.016 38.016 0 0 0 38.08 33.408h0.128a39.552 39.552 0 0 0 38.656-44.544 381.568 381.568 0 0 0-226.56-306.816zM215.808 345.216C240.384 273.728 308.352 231.104 382.72 234.88c11.136 0.512 21.824 2.112 32.384 5.056v0.512c26.88 6.272 51.2 19.456 70.912 37.76a172.8 172.8 0 0 1 55.872 127.36c0 12.096-1.6 24.128-4.096 35.712a175.296 175.296 0 0 1-35.328 74.688 170.88 170.88 0 0 1-89.92 55.68 154.24 154.24 0 0 1-38.784 4.736c-111.616 0-198.528-111.936-157.824-231.04z" fill="#222222" p-id="3955"></path></svg>
                            <svg t="1577085995090" className={`icon inline-block mr-2 ${link == "/user" ? "hidden":"inline-block"}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4477" width="16" height="16"><path d="M795.776 514.816a251.52 251.52 0 0 0 99.712-200.896c0-137.28-110.144-249.792-245.696-249.792a243.84 243.84 0 0 0-199.104 104.128 255.36 255.36 0 0 0-35.648 71.488v0.512c26.88 6.272 51.2 19.456 70.912 37.76 5.696-27.328 17.536-51.968 34.176-73.024a167.104 167.104 0 0 1 157.312-59.776c68.992 11.072 125.952 68.032 137.984 137.92 18.368 108.288-63.04 201.6-165.504 201.6-14.4 0-27.84-1.6-41.344-5.312v-0.448a156.16 156.16 0 0 1-70.848-37.888 175.296 175.296 0 0 1-34.24 73.088s0 0.512 0.512 0.512c-0.512 0.512-1.088 0.512-1.6 1.088a170.88 170.88 0 0 1-89.92 55.68c-2.56 2.112-4.608 4.224-7.296 6.336a361.856 361.856 0 0 0-65.664 74.688l-3.648 5.312c12.352-1.6 24.832-2.56 37.76-2.56 20.096 0 39.808 2.048 58.368 6.208 5.184-6.784 11.904-13.632 18.688-18.944a263.68 263.68 0 0 1 55.36-41.024c12.992-7.424 26.432-13.696 40.32-18.368a284.224 284.224 0 0 1 103.424-19.52c152.896 0 279.168 117.952 295.552 268.928a38.08 38.08 0 0 0 38.144 33.408 39.552 39.552 0 0 0 38.72-44.608 382.272 382.272 0 0 0-226.432-306.56z" fill="#999999" p-id="4478"></path><path d="M519.68 606.272c9.792-6.784 18.624-14.72 26.88-23.168a250.752 250.752 0 0 0 59.008-95.168c1.088-2.56 2.048-5.312 3.2-8.32v-0.576c7.232-23.168 10.88-47.808 10.88-73.6a250.752 250.752 0 0 0-99.264-200.32 241.024 241.024 0 0 0-129.728-48.96c-121.088-8-234.24 78.528-257.536 199.68a251.392 251.392 0 0 0 94.72 250.432 381.568 381.568 0 0 0-226.56 306.752 39.552 39.552 0 0 0 38.72 44.48 38.016 38.016 0 0 0 38.208-33.024c14.912-138.432 122.176-249.088 257.792-266.688 12.352-1.6 24.832-2.56 37.696-2.56 20.096 0 39.872 2.048 58.432 6.208 125.568 25.28 222.912 131.648 237.184 262.784a38.016 38.016 0 0 0 38.08 33.408h0.128a39.552 39.552 0 0 0 38.656-44.544 381.568 381.568 0 0 0-226.56-306.816zM215.808 345.216C240.384 273.728 308.352 231.104 382.72 234.88c11.136 0.512 21.824 2.112 32.384 5.056v0.512c26.88 6.272 51.2 19.456 70.912 37.76a172.8 172.8 0 0 1 55.872 127.36c0 12.096-1.6 24.128-4.096 35.712a175.296 175.296 0 0 1-35.328 74.688 170.88 170.88 0 0 1-89.92 55.68 154.24 154.24 0 0 1-38.784 4.736c-111.616 0-198.528-111.936-157.824-231.04z" fill="#222222" p-id="4479"></path></svg>
                            <Link to="/user" className={`${link == "/user" ? "text-teal-400 active-selected-link" : ""}`}>Users Manage</Link>
                        </div>
                        <div className={`lg:inline-block md:inline-block sm:w-full py-2 px-2 cursor-pointer text-black text-center md:ml-4 sm:ml-0  md:w-auto relative  `}>
                            <svg t="1577152711601" className={`icon mr-2 ${link == "/task" ? "hidden":"inline-block"}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3733" width="16" height="16"><path d="M541.824 478.976a36.224 36.224 0 0 1-14.272-3.072l-378.24-172.096a35.072 35.072 0 1 1 0-63.68l378.304-172.096a34.176 34.176 0 0 1 28.544 0l378.24 172.16a35.072 35.072 0 1 1 0 63.68L556.16 475.84a34.432 34.432 0 0 1-14.336 3.072zM247.68 272l294.144 133.76 294.144-133.76-294.144-133.824-294.144 133.76z" fill="#222222" p-id="3734"></path><path d="M541.824 685.184a36.224 36.224 0 0 1-14.272-3.008l-378.24-172.224a35.008 35.008 0 0 1-17.28-46.08 34.56 34.56 0 0 1 45.824-17.536l363.968 165.696 364.032-165.696a34.56 34.56 0 0 1 45.824 17.472 34.944 34.944 0 0 1-17.344 46.08l-378.24 172.288a36.224 36.224 0 0 1-14.272 3.008z" fill="#999999" p-id="3735"></path><path d="M541.824 891.456a36.224 36.224 0 0 1-14.272-3.072l-378.24-172.16a35.008 35.008 0 0 1-17.28-46.144 34.688 34.688 0 0 1 45.824-17.472l363.968 165.632 364.032-165.632a34.56 34.56 0 0 1 45.824 17.472 34.944 34.944 0 0 1-17.344 46.08l-378.24 172.224a36.224 36.224 0 0 1-14.272 3.072z" fill="#222222" p-id="3736"></path></svg>
                            <svg t="1577085025062" className={`icon mr-2 ${link == "/task" ? "inline-block":"hidden"}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4119" width="16" height="16"><path d="M541.824 478.976a36.224 36.224 0 0 1-14.272-3.072l-378.24-172.096a35.072 35.072 0 1 1 0-63.68l378.304-172.096a34.176 34.176 0 0 1 28.544 0l378.24 172.16a35.072 35.072 0 1 1 0 63.68L556.16 475.84a34.432 34.432 0 0 1-14.336 3.072zM247.68 272l294.144 133.76 294.144-133.76-294.144-133.824-294.144 133.76z" fill="#222222" p-id="4120"></path><path d="M541.824 685.184a36.224 36.224 0 0 1-14.272-3.008l-378.24-172.224a35.008 35.008 0 0 1-17.28-46.08 34.56 34.56 0 0 1 45.824-17.536l363.968 165.696 364.032-165.696a34.56 34.56 0 0 1 45.824 17.472 34.944 34.944 0 0 1-17.344 46.08l-378.24 172.288a36.224 36.224 0 0 1-14.272 3.008z" fill="#4DC0B5" p-id="4121"></path><path d="M541.824 891.456a36.224 36.224 0 0 1-14.272-3.072l-378.24-172.16a35.008 35.008 0 0 1-17.28-46.144 34.688 34.688 0 0 1 45.824-17.472l363.968 165.632 364.032-165.632a34.56 34.56 0 0 1 45.824 17.472 34.944 34.944 0 0 1-17.344 46.08l-378.24 172.224a36.224 36.224 0 0 1-14.272 3.072z" fill="#222222" p-id="4122"></path></svg>
                            <Link to="/task" className={`${link == "/task" ? "text-teal-400 active-selected-link" : ""}`}>Tasks Manage</Link>
                        </div>
                    </div>

                    <div className="inline-block flex-1 mt-2 w-full md:w-auto lg:w-auto xl:w-auto text-right  relative " onClick={this.logout.bind(this)}>
                        <div className="inline-block bg-gray-600 text-white h-8 w-8 rounded-full text-center text-xl">A</div>
                        <div className="mx-2 my-3 inline-block mr-6 cursor-pointer">Asan</div>
                        <div className={`bg-white layout-abs z-10 ${this.state.styleFlag ? "block":"hidden"}`} >
                            <div className="bg-white h-4 w-4 transfrom border-solid border-2 border-gray-600" ></div>
                            <div className="bg-white logout rounded border-solid border-2 border-gray-600 text-center">logout</div>
                        </div>
                    </div>

                </div>

                <Switch>
                    <Route path="/user" component={User} ></Route>
                    <Route path="/task" component={Task} ></Route>
                    <Redirect to="/task"></Redirect>
                </Switch>
            </div>
        )
    }
}