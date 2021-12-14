import React from "react";
import Menu from "../Menu/menu";
import Navbar from "../Navbar/Navbar";
import './tranghai.css'

const tabs = ['Tiến độ điều tra', 'Phân tích số liệu', 'Danh sách dân số', 'Tra cứu thông tin']

export default function Tranghai(props) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="display">
                <Menu />

                <div>
                    
                </div>
            </div>
        </div>
    )
}