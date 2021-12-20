import { Axios } from "axios";
import React, { useState } from "react";
import axios, * as others from 'axios';
import { Tiendo } from "../tiendodieutra/tiendodieutra";
import './lisr_resume.css'

export function ListResume(props) {
    const [peopleList, setpeopleList] = useState([]);

    const showResume = () => {
        axios.get('http://localhost:3000/show').then((response) => {
            setpeopleList(response.data)
        })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Tiendo />
            <button onClick={showResume}>Click</button>

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