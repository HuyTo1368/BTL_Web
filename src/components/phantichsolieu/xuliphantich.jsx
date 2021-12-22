import React from "react";
import './phantichsolieu.css';
// import PieChart from "../ChartPie/ChartPie";
import Chart from 'chart.js/auto';
import { render } from "@testing-library/react";
import { VictoryPie } from "victory-pie"
import './Chart_phan_tich.css';
import BarChart from "./BarChart";


import { VictoryChart } from "victory";
var a = 100;
var c = 200;
var c_1 = Math.round((c*100)/(a+c))
var a_1 = Math.round((a*100)/(a+c))

const myData = [
    {x: "("+c_1+"%"+")", y: c},
    {x: "("+a_1+"%"+")", y: a},
];


const myData2 = [
    {x: "("+c_1+"%"+")", y: c},
    {x: "("+a_1+"%"+")", y: a},
];



export default function Xuliphantich(props) {
    const province = (e) => {

        e.preventDefault()

        const select_tinh = document.querySelector('#selected1')
        const tinh = document.querySelector('#tinh')
        const huyen = document.querySelector('#huyen')
        const xa = document.querySelector('#xa')
        console.log(select_tinh)
        select_tinh.addEventListener('click',function() {
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
        select_huyen.addEventListener('click',function() {
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
        select_xa.addEventListener('click',function() {
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
            <div className="Chart_phan_tich" id="chu_thich1">
            <VictoryPie 
                data = {myData}
                colorScale = {"heatmap"}
                radius = {170} 
            />
            </div>
            <div className="Chart_phan_tich_2" id="chu_thich2">
            <VictoryPie
                 data = {myData2}
                 colorScale = { "red"}
                 radius = {170} 
                 animate={{
                    duration: 2000
                  }}

            />
            </div>
            <div>
            </div>
            <ul className="legend_phan_tich" >
                <li><span className="legend_1"></span> Nam</li>
                <li><span className="legend_2"></span> Nữ</li>
                <li><span className="legend_3"></span> Trên 18 tuổi</li>
                <li><span className="legend_4"></span> Dưới 18 tuổi</li>
            </ul>
            
            <div className="chart_dan_toc">
                <BarChart style = {'height: 300'}/>
            </div>
        </div>


    )
}