import React, { Component } from 'react'
import '../css/iconfont.css'
export default class task extends Component {
    render() {
        return (
            <div className="w-full  h-full pb-8 flex bg-gray-200" > 
                {/* <h1 className="text-center bg-gray-500 py-2 mt-16">task manage</h1> */}
                <div className="w-1/6 flex flex-col shadow-md bg-gray-100" style={{"height":"540px"}}>
                    <div className="flex  justify-center bg-teal-500 text-white px-2 py-4 cursor-pointer hover:bg-teal-600"> <i className="iconfont icon-jia mr-2"></i> <span className="align-middle">Create Task</span></div>
                    <div className="flex-1 justify-center pl-6 pr-4 py-6  cursor-pointer">
                        <p className="text-black h-8 font-semibold font-sans text-xl overflow-hidden">My Tasks (0)</p>
                        <p className="pl-2 h-10 mt-2 text-teal-500 overflow-hidden"><i className="iconfont icon-todos "></i> <span className=" text-base font-semibold">TBD(0)</span></p>
                        <p className="pl-2 h-10 overflow-hidden"><i className="iconfont icon-involves"></i> <span className="text-gray-700 text-base">Involved(2)</span></p>
                        <p className="pl-2 h-10 overflow-hidden"><i className="iconfont icon-created"></i> <span className="text-gray-700 text-base">Created(1)</span></p>
                        <p className='pl-2 h-10 overflow-hidden'><i className="iconfont icon-completed-task"></i> <span className="text-gray-700 text-base">Completed(2)</span></p>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 absolute  justify-center text-center " style={{"top": "20%","left": "50%"}}>
                        <span className="iconfont  icon-empty-task text-gray-500 text-6xl"></span>
                        <p className="leading-loose">Oppps it's empty here</p>
                        <div className="bg-teal-500 text-white px-2 py-4 cursor-pointer hover:bg-teal-200 hover:text-black w-56 rounded">Create Task</div>
                    </div>
                </div>
            </div>
        
        )
    }
}
