import axios from "axios";
import React, {useEffect, useState}from "react";
import './select.css'
import axiosInstance from "../axios/axios";
export default function Select() {
    const [listProvince, setlistProvince] = useState([]);
    const [listTown, setlistTown] = useState([]);
    const [listVillage, setlistVillage] = useState([]);
    const [province, setProvince] = useState('');
    const [town, setTown] = useState('');
    const [village, setVillage] = useState('');

    useEffect(() => {
        axiosInstance.get('/select').then((res) => {
            setlistProvince(res.data);
            console.log("province ok")
        })
    }, []);

    useEffect(() => {
        axiosInstance.get(`/select/town?province=${province}`).then((res) => {
            setlistTown(res.data);
            console.log(province);
            console.log(res.data)
        })
    }, [province]);

    useEffect(() => {
        axiosInstance.get(`/select/village?province=${province}&town=${town}`).then((res) => {
            setlistVillage(res.data);
        })
    }, [province, town]);

    return (
        <div>
            <select
                name={1}
                id="tinh"
                className="luachon1"
                onChange={e => setProvince(e.target.value)}
            >
                <option>Tỉnh/ Thành phố</option>
                {listProvince.map((val, key) => {
                    return (
                        <option key={val.province} value={val.province}>
                            {val.province}
                        </option>
                    )
                })}
            </select>

            <select
                name={2}
                id="huyen"
                className="luachon1"
                onChange={e => setTown(e.target.value)}
            >
                <option>Quận/ Huyện</option>
                {listTown.map((val, key) => {
                    return (
                        <option key={val.town_name} value={val.town_name}>
                            {val.town_name}
                        </option>
                    )
                })}
            </select>
            <select
                name={3}
                id="xa"
                className="luachon1"
                onChange={e => setVillage(e.target.value)}
            >
                <option>Xã/ Phường</option>
                {listVillage.map((val, key) => {
                    return (
                        <option key={val.village_name} value={val.village_name}>
                            {val.village_name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}