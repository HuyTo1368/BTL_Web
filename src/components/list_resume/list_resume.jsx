import React, { useState , useContext, createContext} from "react";
import axios from 'axios';
import './lisr_resume.css'
import Select from "../PUBLIC/select_address/select";

export function ListResume(props) {
    const [peopleList, setpeopleList] = useState([]);
    const [tinh, setTinh] = useState();
    const [huyen, setHuyen] = useState();
    const [xa, setXa] = useState();


    const callbackFunction = (Stinh, Shuyen, Sxa) => {
        setTinh(Stinh);
        setHuyen(Shuyen);
        setXa(Sxa);
    };

    const showResume = () => {
        axios.get(`http://localhost:3000/show?tinh=${tinh}&huyen=${huyen}&xa=${xa}`).then((response) => {
            setpeopleList(response.data)
            console.log(response.data);
        })
            .catch(err => console.log(err))
            
    }
    
    return (
        <div className="listResume">
            <div id="head_listResume">
                <Select parentCallback={callbackFunction}/>
                <button className="clickList" onClick={showResume}>Xem danh sách</button>
            </div>

            <table id="list_people">
                <thead>
                    <tr>
                        <th className="ppname">Họ tên</th>
                        <th className="ppcccd">CCCD</th>
                        <th className="ppdate">Ngày sinh</th>
                        <th className="ppgender">Giới tính</th>
                        <th className="ppaddress ">Địa chỉ</th>
                        <th className="ppreligion">Dân tộc</th>
                        <th className="ppjob">Nghề nghiệp</th>
                    </tr>
                </thead>

                <tbody>
                    {peopleList.map((val, key) => {
                        return (
                            <tr key={val.CCCD} className="showPeople">
                                <td className="ppname">{val.fullname}</td>
                                <td className="ppcccd">{val.CCCD}</td>
                                <td className="ppdate">{val.datebirth}</td>
                                <td className="ppgender">{val.gender}</td>
                                <td className="ppaddress ">{val.address}</td>
                                <td className="ppreligion">{val.religion}</td>
                                <td className="ppjob">{val.job}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}