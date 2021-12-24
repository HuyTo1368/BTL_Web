import React, { Component } from "react";
import axios from "axios";
import './tiendodieutra.css';
import { VictoryPie } from "victory-pie"
import './ChartPie.css'
import "./tiendodieutra";
import { VictoryBar } from "victory";
import { VictoryChart } from "victory";
import { VictoryTheme } from "victory";
import { useEffect, useState } from "react";
import Select from "../public/select_address/select";


  export default function XuliTiendo(props) {
  const [listProvince, setlistProvince] = useState([]);
  const [listTown, setlistTown] = useState([]);
  const [listVillage, setlistVillage] = useState([]);
  const [province, setProvince] = useState('');
  const [town, setTown] = useState("checktown");
  const [village, setVillage] = useState("checkvillage");
  const [popuPro, setPopuPro] = useState('')
  const[popuReal, setPopuReal] = useState('')

  // const [popuTown, setPopuTown] = useState('check_village')
 

  var abc
var a = 250;
var c = 300;

  

  useEffect(() => {
      axios.get('http://localhost:3000/select').then((res) => {
          setlistProvince(res.data);
      })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/show1?dan1=${province}&dan11=${town}&dan111=${village}`).then((res) => {
      console.log(res.data[0].tong);
      setPopuPro(res.data[0].tong)
      setPopuReal(res.data[0].total)
  })
  }, [province,town,village]);

  useEffect(() => {
    axios.get(`http://localhost:3000/show2?dan1=${province}&dan11=${town}&dan111=${village}`).then((res) => {
      console.log(res.data);
  })
  }, [province,town,village]);


  useEffect(() => {
      axios.get(`http://localhost:3000/select/town?province=${province}`).then((res) => {
          setlistTown(res.data);
      })
  }, [province]);
 
  useEffect(() => {
      axios.get(`http://localhost:3000/select/village?province=${province}&town=${town}`).then((res) => {
          setlistVillage(res.data);
      })
  }, [province, town]);



  var a 
  var c 
  if(popuPro == 0){
    a = 0;
    c = 100;
  }
  else{
    a = popuPro
    c = popuReal
  }
 
  var a_1 = Math.round((a * 100) / (a + c))
  var c_1 = Math.round((c * 100) / (a + c))

  const myData = [
    { x: "(" + c_1 + "%" + ")", y: c },
    { x: "(" + a_1 + "%" + ")", y: a },
  ];
  
  return (
  <div>
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
                <option value={'checktown'}>Quận/ Huyện</option>
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
                <option value={"checkvillage"}>Xã/ Phường</option>
                {listVillage.map((val, key) => {
                    return (
                        <option key={val.village_name} value={val.village_name}>
                            {val.village_name}
                        </option>
                    )
                })}
            </select>
        </div>
    <div className="Chart_tien_do">
      <VictoryPie
        data={myData}
        colorScale={"yellow", "blue"}
        radius={150}
        animate={{
          duration: 2000
        }}
      />
    </div>
    <ul class="legend">
      <li><span className="superawesome"></span> Đã khảo sát</li>
      <li><span className="awesome"></span> Chưa khảo sát</li>
    </ul>
  </div>
  )
}

