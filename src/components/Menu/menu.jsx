import React from "react"
import './menu.css'

const tabs = ['Tiến độ điều tra', 'Phân tích số liệu', 'Danh sách dân số', 'Tra cứu thông tin']

export default function Menu(props) {
    return (
        <div>
            {tabs.map(tab => (
                <div className="TanLong"
                    key={tab}
                >
                <a href="">{tab}</a>
                    
                </div>
            ))}
        </div>
    )
}