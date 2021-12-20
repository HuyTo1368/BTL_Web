import axios from "axios";
import React, { useState, useEffect } from "react";
import './tiendodieutra.css'
import '../select_address/select'
import Select from "../select_address/select";

const province = () => {
    const select_tinh = document.querySelector('#select1')
    const select_huyen = document.querySelector('#select2')
    const select_xa = document.querySelector('#select3')
    const tinh = document.querySelector('.luachon1')
    const huyen = document.querySelector('.luachon2')
    const xa = document.querySelector('.luachon3')
    // select_tinh.addEventListener('click',function() {
    //    huyen.style.display = 'none';
    //    xa.style.display = 'none';
    // })  
}
const district = () => {
    const select_tinh = document.querySelector('#select1')
    const select_huyen = document.querySelector('#select2')
    const select_xa = document.querySelector('#select3')
    const tinh = document.querySelector('.luachon1')
    const huyen = document.querySelector('.luachon2')
    const xa = document.querySelector('.luachon3')
    //     select_tinh.addEventListener('click',function() {
    //         xa.style.display = 'none';

    // })
}
// const town = () => {
//     const select_tinh = document.querySelector('#select1')
//     const select_huyen = document.querySelector('#select2')
//     const select_xa = document.querySelector('#select3')
//     const tinh = document.querySelector('.luachon1')
//     const huyen = document.querySelector('.luachon2')
//     const xa = document.querySelector('.luachon3')
// }


export function Tiendo(props) {


    console.log(province);

    return (
        <div>
            <button className="select_cap" id="selected1">Cấp tỉnh</button>
            <button className="select_cap" id="selected2">Cấp huyện</button>
            <button className="select_cap" id="selected3">Cấp xã</button>
            <Select></Select>
            <div>
            </div>
        </div>

    )

}