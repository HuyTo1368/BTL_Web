import React from "react";
import axios from "axios";
import './tiendodieutra.css';
import { VictoryPie } from "victory-pie"
import './ChartPie.css'
import "./tiendodieutra";
import { VictoryBar } from "victory";
import { VictoryChart } from "victory";
import { VictoryTheme } from "victory";
import { useState } from "react";

var dataChartPie





const  sampleData=[
    { x: 1, y: 2, y0: 1 },
    { x: 2, y: 3, y0: 2 },
    { x: 3, y: 5, y0: 2 },
    { x: 4, y: 4, y0: 3 },
    { x: 5, y: 6, y0: 3 }
  ]


var getApi = 'http://localhost:5000/show'
// var a = 63
fetch(getApi)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // const [a, seta] = useState(data[0].summ);
    console.log(data)
    return `<div>{data}</div>`

    
  });
//   const [sliders] = useState(...data);
  var a = 60
  var c = 100;
  var a_1 = Math.round((a * 100) / (a + c))
  var c_1 = Math.round((c * 100) / (a + c))



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
                    animate={{
                        duration: 2000
                      }}
                />
                <ul class="legend">
                    <li><span className="superawesome"></span> Chưa khảo sát</li>
                    <li><span className="awesome"></span> Đã khảo sát</li>
                </ul>
            </div>
        </div>
    )
}