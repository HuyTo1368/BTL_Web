import React from "react";
import axios from "axios";
import './tiendodieutra.css';
// import PieChart from "../ChartPie/ChartPie";
import { VictoryPie } from "victory-pie"
import './ChartPie.css'
import "./tiendodieutra";

var a = 250;
var c = 300;

var c_1 = Math.round((c * 100) / (a + c))
var a_1 = Math.round((a * 100) / (a + c))



const myData = [
    { x: "(" + c_1 + "%" + ")", y: c },
    { x: "(" + a_1 + "%" + ")", y: a },
];

export default function XuliTiendo() {
    const province = (e) => {

        e.preventDefault()

        const select_tinh = document.querySelector('#selected1')
        const tinh = document.querySelector('#tinh')
        const huyen = document.querySelector('#huyen')
        const xa = document.querySelector('#xa')
        console.log(select_tinh)
        select_tinh.addEventListener('click', function () {
            tinh.style.display = 'inline-block'
            huyen.style.display = 'none'
            xa.style.display = 'none'
        })

    }
    const district = () => {
        const select_huyen = document.querySelector('#selected2')
        const tinh = document.querySelector('#tinh')
        const huyen = document.querySelector('#huyen')
        const xa = document.querySelector('#xa')
        select_huyen.addEventListener('click', function () {
            tinh.style.display = 'inline-block'
            huyen.style.display = 'inline-block';
            xa.style.display = 'none';


        })
    }
    const town = () => {
        const select_xa = document.querySelector('#selected3')
        const tinh = document.querySelector('#tinh')
        const huyen = document.querySelector('#huyen')
        const xa = document.querySelector('#xa')
        select_xa.addEventListener('click', function () {
            tinh.style.display = 'inline-block'
            huyen.style.display = 'inline-block';
            xa.style.display = 'inline-block';
        })
    }
    return (
        <div>
            <button onClick={province} className="select_cap" id="selected1">Cấp tỉnh</button>
            <button onClick={district} className="select_cap" id="selected2">Cấp huyện</button>
            <button onClick={town} className="select_cap" id="selected3">Cấp xã</button>
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
            <div className="Chart_tien_do">
                <VictoryPie
                    data={myData}
                    colorScale={"yellow", "blue"}
                    radius={200}
                />
                <ul class="legend">
                    <li><span className="superawesome"></span> Chưa khảo sát</li>
                    <li><span className="awesome"></span> Đã khảo sát</li>
                </ul>
            </div>
        </div>
    )
}