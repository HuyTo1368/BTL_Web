import React from "react";
import './phantichsolieu.css';
// import PieChart from "../ChartPie/ChartPie";
import Chart from 'chart.js/auto';
import { render } from "@testing-library/react";
import { VictoryPie } from "victory-pie"
import './Chart_phan_tich.css';
// import BarChart from "./BarChart";
import './BarChart.css'
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryChart } from "victory";
import Select from "../public/select_address/select";
// var a = 100;
// var c = 200;
// var c_1 = Math.round((c*100)/(a+c))
// var a_1 = Math.round((a*100)/(a+c))

// const myData = [
//     {x: "("+c_1+"%"+")", y: c},
//     {x: "("+a_1+"%"+")", y: a},
// ];


// const myData2 = [
//     {x: "("+c_1+"%"+")", y: c},
//     {x: "("+a_1+"%"+")", y: a},
// ];



export default function Xuliphantich(props) {
    const data = props.id;
    const [listProvince, setlistProvince] = useState([]);
  const [listTown, setlistTown] = useState([]);
  const [listVillage, setlistVillage] = useState([]);
  const [province, setProvince] = useState('');
  const [town, setTown] = useState("checktown");
  const [village, setVillage] = useState("checkvillage");
  
    //giới tính
    const [gender1,setGender1] = useState('')
    const [gender2,setGender2] = useState('')
    
    //tuổi trưởng thành
    const [teenager,setTeenager] = useState('')
    const [older,setOlder] = useState('')

    //dân tộc
    const[religion,setReligion] = useState('')
    const[religion2,setReligion2] = useState('')
    const[religion3,setReligion3] = useState('')
    const[religion4,setReligion4] = useState('')
    const[religion5,setReligion5] = useState('')

    //số người mỗi dân tộc
    const[eachReligion,setEachReligion] = useState('')
    const[eachReligion2,setEachReligion2] = useState('')
    const[eachReligion3,setEachReligion3] = useState('')
    const[eachReligion4,setEachReligion4] = useState('')
    const[eachReligion5,setEachReligion5] = useState('')

    const callbackFunction = (Stinh, Shuyen, Sxa) => {
        setProvince(Stinh);
        setTown(Shuyen);
        setVillage(Sxa); 
    };



//   useEffect(() => {
//     axios.get('http://localhost:5000/select').then((res) => {
//         setlistProvince(res.data);
//     })
// }, []);
// giới tính nam
useEffect(() => {
  axios.get(`http://localhost:5000/show2?dan1=${province}&dan11=${town}&dan111=${village}`).then((res) => {
    // console.log(res.data[0].Nam);
    setGender1(res.data[0].Nam);
})
}, [province,town,village]);

//giới tính nữ
useEffect(() => {
    axios.get(`http://localhost:5000/show3?dan1=${province}&dan11=${town}&dan111=${village}`).then((res1) => {
    //   console.log(res1.data);
      setGender2(res1.data[0].Nu);   
  })
  }, [province,town,village]);

// trên 18 tuổi
useEffect(() => {
    axios.get(`http://localhost:5000/show4?dan1=${province}&dan11=${town}&dan111=${village}`).then((res2) => {
    //   console.log(res2.data);
      setOlder(res2.data[0].older);   
  })
  }, [province,town,village]);

// dưới 18 tuổi 
useEffect(() => {
    axios.get(`http://localhost:5000/show5?dan1=${province}&dan11=${town}&dan111=${village}`).then((res3) => {
    //   console.log(res3.data);
      setTeenager(res3.data[0].young);   
  })
  }, [province,town,village]);

//thống kê dân tộc
useEffect(() => {
    axios.get(`http://localhost:5000/show6?dan1=${province}&dan11=${town}&dan111=${village}`).then((res4) => {
        console.log(res4.data)
       if(res4.data.length == 0){
           console.log('no data')
           setReligion('No data')
           setReligion2('No data')
           setReligion3('No data')
           setReligion4('No data')
           setReligion5('No data')
           
           setEachReligion(0)
           setEachReligion2(0)
           setEachReligion3(0)
           setEachReligion4(0)
           setEachReligion5(0)
       } 
       else{
            setReligion(res4.data[0].religion)
            setReligion2(res4.data[1].religion)
            setReligion3(res4.data[2].religion)
            setReligion4(res4.data[3].religion)
            setReligion5(res4.data[4].religion)
            
            setEachReligion(res4.data[0].mount)
            setEachReligion2(res4.data[1].mount)
            setEachReligion3(res4.data[2].mount)
            setEachReligion4(res4.data[3].mount)
            setEachReligion5(res4.data[4].mount)
       }
  })
  }, [province,town,village]);

// useEffect(() => {
//     axios.get(`http://localhost:5000/select/town?province=${province}`).then((res) => {
//         setlistTown(res.data);
//     })
// }, [province]);

// useEffect(() => {
//     axios.get(`http://localhost:5000/select/village?province=${province}&town=${town}`).then((res) => {
//         setlistVillage(res.data);
//     })
// }, [province, town]);

var a
var c
if(gender1 == 0){
    a = 0
    c = 100
}
 else{
    a = gender1
    c = gender2 
 }

var a_1 = Math.round((a * 100) / (a + c))
var c_1 = Math.round((c * 100) / (a + c))

var b
var d
if(older == 0){
    b = 0
    d = 100
}
 else{
    b = older
    d = teenager 
 }
var b_1 = Math.round((b * 100) / (b + d))
var d_1 = Math.round((d * 100) / (b + d))

const myData = [
    {x: "("+c_1+"%"+")", y: c},
    {x: "("+a_1+"%"+")", y: a},
];

const myData2 = [
    {x: "("+d_1+"%"+")", y: d},
    {x: "("+b_1+"%"+")", y: b},
];
var r1 = religion
var r2 = religion2
var r3 = religion3
var r4 = religion4
var r5 = religion5

var m1 = eachReligion
var m2 = eachReligion2
var m3 = eachReligion3
var m4 = eachReligion4
var m5 = eachReligion5

    return (
        <div>
            <div>
            <Select parentCallback={callbackFunction} check={data}/>
            {/* <select
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
            </select> */}
        </div>
            <div className="Chart_phan_tich" id="chu_thich1">
            <VictoryPie 
                data = {myData}
                colorScale = {"heatmap"}
                radius = {150}
                animate={{
                    duration: 1000
                  }} 
            />
            </div>
            <div className="Chart_phan_tich_2" id="chu_thich2">
            <VictoryPie
                 data = {myData2}
                 colorScale = { "red"}
                 radius = {150} 
                 animate={{
                    duration: 1000
                  }}

            />
            </div>
            <div>
            </div>
            <ul className="legend_phan_tich" >
                <li><span className="legend_1"></span> Nam</li>
                <li><span className="legend_2"></span> Nữ</li>
                <li><span className="legend_3"></span> Dưới 18 tuổi</li>
                <li><span className="legend_4"></span> Trên 18 tuổi</li>
            </ul>
            
            <div className="chart_dan_toc">
            <Bar
            data={{
                labels: [r1,r2,r3, r4, r5],
                datasets: [
                    {
                        label: 'Sô dân của 5 dân tộc nhiều nhất(đơn vị: người)',
                        data: [m1,m2,m3,m4,m5],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)'

                        ],
                    }
                ]
            }}
           
            options={{
                maintainAspectRation: false,
            }}
        />
            </div>
        </div>


    )
}