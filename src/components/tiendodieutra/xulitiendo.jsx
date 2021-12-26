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


  // const [listProvince, setlistProvince] = useState([]);
  // const [listTown, setlistTown] = useState([]);
  // const [listVillage, setlistVillage] = useState([]);
  // const [province, setProvince] = useState('');
  // const [town, setTown] = useState("all_province");
  // const [village, setVillage] = useState("all_town");





//----------------------------------------------------------------------------------------------------------

  const data = props.check;
  const [listProvince, setlistProvince] = useState([]);
  const [listTown, setlistTown] = useState([]);
  const [listVillage, setlistVillage] = useState([]);
  const [province, setProvince] = useState('');
  const [town, setTown] = useState('all_province');
  const [village, setVillage] = useState('all_town');
  const [chon, setChon] = useState('Huy');

  const sendData = (a, b, c) => {
      props.parentCallback(a, b, c)
  }

  useEffect(() => {
      axiosInstance.get(`/select?role=${data.role}&user=${data.user}`).then((res) => {
          setlistProvince(res.data);
      })
  }, []);

  useEffect(() => {
      axiosInstance.get(`/select/town?province=${province}&role=${data.role}&user=${data.user}`).then((res) => {
          setlistTown(res.data);
      })
  }, [province]);
 
  useEffect(() => {
      axiosInstance.get(`/select/village?province=${province}&town=${town}&role=${data.role}&user=${data.user}`).then((res) => {
          setlistVillage(res.data);
      })
      
  }, [province, town]);

  useEffect(() => {
      sendData(province, town, village)
  }, [province, town, village])

//-------------------------------------------------------------------------------------------------







  const [popuPro, setPopuPro] = useState('')
  const [popuReal, setPopuReal] = useState('')





  const data = props.unitad;

  var abc
  var a = 250;
  var c = 300;

  // const callbackFunction = (Stinh, Shuyen, Sxa) => {
  //   setProvince(Stinh);
  //   setTown(Shuyen);
  //   setVillage(Sxa);
  // };




  useEffect(() => {
    axios.get(`http://localhost:5000/show1?dan1=${province}&dan11=${town}&dan111=${village}`).then((res) => {
      console.log(res.data[0].tong);
      setPopuPro(res.data[0].tong)
      setPopuReal(res.data[0].total)
    })
  }, [province, town, village]);
  //   useEffect(() => {
  //     axios.get('http://localhost:5000/select').then((res) => {
  //         setlistProvince(res.data);
  //     })
  // }, []);

  //   useEffect(() => {
  //       axios.get(`http://localhost:5000/select/town?province=${province}`).then((res) => {
  //           setlistTown(res.data);
  //       })
  //   }, [province]);

  //   useEffect(() => {
  //       axios.get(`http://localhost:5000/select/village?province=${province}&town=${town}`).then((res) => {
  //           setlistVillage(res.data);
  //       })
  //   }, [province, town]);



  var a
  var c
  if (popuPro == 0) {
    a = 0;
    c = 100;
  }else {
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
                    <option value = 'all_province'>Quận/ Huyện</option>
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
                    <option value = 'all_town'>Xã/ Phường</option>
                    {listVillage.map((val, key) => {
                        return (
                            <option key={val.village_name} value={val.village_name}>
                                {val.village_name}
                            </option>
                        )
                    })}
                </select>
            
        {/* <Select parentCallback={callbackFunction} check={data} /> */}
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

