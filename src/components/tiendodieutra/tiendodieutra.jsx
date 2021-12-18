import React from "react";
import './tiendodieutra.css'

export function Tiendo(props) {
    return (
        <div>
            <button className="select_cap">Cấp tỉnh</button>
            <button className="select_cap">Cấp huyện</button>
            <button className="select_cap">Cấp xã</button>
            <div>
                <select name={1} id="tinh" className="luachon">
                    <option>Tỉnh/ Thành phố</option>
                    <option>Hà Nội</option>
                    <option>Nghệ An</option>
                </select>
                <select name={1} id="huyen" className="luachon">
                    <option>Quận/ Huyện</option>
                </select>
                <select name={1} id="xa" className="luachon">
                    <option>Phường/ Xã</option>
                </select>
            </div>
        </div>
    )
}