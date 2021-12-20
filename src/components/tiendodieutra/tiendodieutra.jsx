import axios from "axios";
import React, {useState} from "react";
import './tiendodieutra.css'

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
    const [province, setProvince] = useState([]);

    axios.get('')



    return (
        <div>
            <button onClick={province()} className="select_cap" id="selected1">Cấp tỉnh</button>
            <button onClick={district()} className="select_cap" id="selected2">Cấp huyện</button>
            <button className="select_cap" id="selected3">Cấp xã</button>
            <div>
                <select name={1} id="tinh" className="luachon1">
                    <option>Tỉnh/ Thành phố</option>
                    <option>Hà Nội</option>
                    <option>Nghệ An</option>
                </select>
                <select name={1} id="huyen" className="luachon2">
                    <option>Quận/ Huyện</option>
                </select>
                <select name={1} id="xa" className="luachon3">
                    <option>Phường/ Xã</option>
                </select>
            </div>
            <div>
                
            </div>
        </div>

    )
}