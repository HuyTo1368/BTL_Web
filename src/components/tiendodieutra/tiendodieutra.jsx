import React from "react";
import axios from "axios";
import './tiendodieutra.css';
// import PieChart from "../ChartPie/ChartPie";
import { render } from "@testing-library/react";
import { VictoryPie } from "victory-pie"
import './ChartPie.css'
import { useState } from "react/cjs/react.development";
import XuliTiendo from "./xulitiendo";



export function Tiendo(props) {
    
    return (
        <div>
            <XuliTiendo />
        </div>


    )

}