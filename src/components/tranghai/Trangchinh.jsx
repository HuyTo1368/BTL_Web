import React from "react";
import Menu from "../Menu/menu";

const tabs = ['Tiến độ điều tra', 'Phân tích số liệu', 'Danh sách dân số', 'Tra cứu thông tin']

export default function Tranghai(props) {
    return (
        <div>
            <Menu />

            <div>
                <img 
                    src={'https://hanoispiritofplace.com/wp-content/uploads/2016/01/hinh-mat-cuoi-11.jpg'}
                />
            </div>
        </div>
    )
}