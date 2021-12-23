import axios from "axios";
import React, { useState, useEffect } from "react";
import './search_resume.css'

export default function Search(props) {
    const [listProvince, setlistProvince] = useState([]);
    const [listTown, setlistTown] = useState([]);
    const [listVillage, setlistVillage] = useState([]);
    const [province, setProvince] = useState('1');
    const [town, setTown] = useState('all_province');
    const [village, setVillage] = useState('all_town');
    const [fullname, setFullname] = useState('');
    const [cccd, setCccd] = useState('');
    const [hometown, sethometown] = useState('');
    const [job, setJob] = useState('');
    const [religion, setReligion] = useState('');
    const [danhsach, setDanhsach] = useState([]);
    const check = 0;

    useEffect(() => {
        axios.get('http://localhost:3000/select').then((res) => {
            setlistProvince(res.data);
        })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3000/select/town?province=${province}`).then((res) => {
            setlistTown(res.data);
        })
    }, [province]);

    useEffect(() => {
        axios.get(`http://localhost:3000/select/village?province=${province}&town=${town}`).then((res) => {
            setlistVillage(res.data);
        })
        if (province == "1") {
            setTown('all_province')
        }
        if (town == 'all_province') {
            setVillage('all_town')
        }
    }, [province, town]);

    useEffect(() => {
        axios.get(`http://localhost:3000/search?province=${province}&town=${town}&village=${village}&fullname=${fullname}&cccd=${cccd}&hometown=${hometown}&job=${job}&religion=${religion}`).then((res) => {
                setDanhsach(res.data);
        })
    }, [province, town, village, fullname, cccd, hometown, job, religion]);

    return (
        <div className="se">
            <h1>Tra cứu thông tin</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ width: '8vw' }}>Họ và tên</th>
                        <th style={{ width: '6vw' }}>CMND</th>
                        <th style={{ width: '5vw' }}>Giới tính</th>
                        <th style={{ width: '5vw' }}>Ngày sinh</th>
                        <th style={{ width: '8vw' }}>Quê quán</th>
                        <th style={{ width: '6vw' }}>Nghề nghiệp</th>
                        <th style={{ width: '4vw' }}>Dân tộc</th>
                        <th style={{ width: '7vw' }}>Xã/ Phường</th>
                        <th style={{ width: '7vw' }}>Quận/ Huyện</th>
                        <th style={{ width: '8vw' }}>Tỉnh/ Thành phố</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="se_name">
                            <input
                                name="fullname"
                                style={{ width: '8vw' }}
                                type="text"
                                onBlur={e => setFullname(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                name="cmnd"
                                style={{ width: '6vw' }}
                                type="text"
                                onBlur={e => setCccd(e.target.value)}
                            />
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            <input
                                name="quequan"
                                style={{ width: '8vw' }}
                                type="text"
                                onBlur={e => sethometown(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                style={{ width: '6vw' }}
                                type="text"
                                onBlur={e => setJob(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                style={{ width: '4vw' }}
                                type="text"
                                onBlur={e => setReligion(e.target.value)}
                            />
                        </td>
                        <td style={{ width: '6vw' }}>
                            <select
                                style={{ width: '7vw' }}
                                onChange={e => setVillage(e.target.value)}
                            >
                                <option value={'all_town'}>Chọn xã</option>
                                {listVillage.map((val, key) => {
                                    return (
                                        <option key={val.village_name} value={val.village_name}>
                                            {val.village_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </td>
                        <td>
                            <select
                                style={{ width: '7vw' }}
                                onChange={e => setTown(e.target.value)}>
                                <option value={'all_province'}>Chọn huyện</option>
                                {listTown.map((val, key) => {
                                    return (
                                        <option key={val.town_name} value={val.town_name}>
                                            {val.town_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </td>
                        <td>
                            <select
                                style={{ width: '8vw' }}
                                onChange={e => setProvince(e.target.value)}
                            >
                                <option value={'1'}>Chọn tỉnh</option>
                                {listProvince.map((val, key) => {
                                    return (
                                        <option key={val.province} value={val.province}>
                                            {val.province}
                                        </option>
                                    )
                                })}
                            </select>
                        </td>
                    </tr>
                    {danhsach.map((val, key) => {
                        return (
                            <tr key={val.CCCD}>
                                <td>{val.fullname}</td>
                                <td>{val.CCCD}</td>
                                <td>{val.gender}</td>
                                <td>{val.datebirth}</td>
                                <td>{val.hometown}</td>
                                <td>{val.job}</td>
                                <td>{val.religion}</td>
                                <td>{val.village}</td>
                                <td>{val.town}</td>
                                <td>{val.province}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}