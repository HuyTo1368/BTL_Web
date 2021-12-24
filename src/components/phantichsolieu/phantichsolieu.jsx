import React from "react";
import './phantichsolieu.css';
// import PieChart from "../ChartPie/ChartPie";
import Chart from 'chart.js/auto';
import { render } from "@testing-library/react";
import { VictoryPie } from "victory-pie"
import './Chart_phan_tich.css';
import Xuliphantich from "./xuliphantich";




export default function PhanTich(props) {
    
    return(
        <div>
            <Xuliphantich />
        </div>
    )
}