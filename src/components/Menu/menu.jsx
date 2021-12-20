import { Axios } from "axios";
import React, { useRef, useState } from "react"
import './menu.css'
import { Tiendo } from "../tiendodieutra/tiendodieutra";

const tabs = ['Tiến độ điều tra', 'Phân tích số liệu', 'Danh sách dân số', 'Tra cứu thông tin', 'Cấp tài khoản', 'Nhập liệu'];



export default function Menu(props) {
    
    return (
        <div>
            <div className="menu1" >
                <button className="active">
                    Tiến độ điều tra
                </button>
            </div>
            <div className="menu1">
                <button className="active" >
                    Phân tích số liệu
                </button>
            </div>
            <div className="menu1">
                <button className="active"  >
                    Danh sách dân số
                </button>
            </div>
            <div className="menu1">
                <button className="active"  >
                    Tra cứu thông tin
                </button>
            </div>
            <div className="menu1">
                <button className="active"  >
                    Cấp tài khoản
                </button>
            </div>
            <div className="menu1">
                <button className="active"  >
                    Nhập liệu
                </button>
            </div>
        </div>
    )
}