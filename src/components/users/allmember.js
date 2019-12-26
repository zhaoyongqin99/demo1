import React, { Component } from 'react'
import '../../css/allmember.css'
export default class allmember extends Component {
    render() {
        return (
            <div>
                <div className="flex justify-between p-3 border-b bg-white rounded-t font-bold">
                    <div>All Members ( 1 )</div>
                    <div>
                        <span className="iconfont icon-jia text-teal-400 pr-2 cursor-pointer"></span>
                        <span className="font-normal text-teal cursor-pointer">Add Member</span>
                    </div>
                </div>
                <div className="flex-1 h-full overflow-auto flex-col shadow-md p-4 bg-white rounded-b">
                    <table className="w-full">
                        <tbody className="w-full">
                            <tr className="text-sm bg-gray-100 text-gray-600">
                                <td className="table-cell ">Display Name</td>
                                <td className="table-cell ">Full Name</td>
                                <td className="table-cell ">Email</td>
                                <td className="table-cell ">Task Nums</td>
                                <td className="table-cell ">Belongs Group</td>
                                <td className="table-cell ">Action</td>
                            </tr>
                            <tr className="table-tr">
                                <td className="table-cell py-6">zhao</td>
                                <td className="table-cell">qin</td>
                                <td className="table-cell">yongqin.zhao@wishlife.com</td>
                                <td className="table-cell">0</td>
                                <td className="table-cell"> </td>
                                <td className="table-cell"><span className="text-green-500 cursor-pointer">Edit</span> / <span className="text-red-600 cursor-pointer">Delete</span> </td>
                            </tr>
                        </tbody>
                    </table>


                </div>

            </div>
        )
    }
}
