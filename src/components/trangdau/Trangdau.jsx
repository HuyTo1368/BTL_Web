import "./trangdau.css"
import React, { useState } from 'react';
import axiosInstance from "../public/axios/axios";
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

export default function Login(prop) {
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [login_in, setLogin_in] = useState({
        user: "",
        password: ""
    });

    const handleLogin = () => {
        axiosInstance.post(`/login`, login_in).then((res) => {
            if (res.data.length == 0) {
                setError('Sai thông tin đăng nhập')
            }
            else {
                setError('')
                prop.getJWT(res.data[0]);
            }
        })
    }

    return (
        <div className='background_login'>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
        
                <div className="lrow">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" onChange={e => setLogin_in({...login_in, user:`${e.target.value}`})}/>
                </div>
                <div className="lrow">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" onChange={e => setLogin_in({...login_in, password:sha256(e.target.value).toString()})}/>
                </div>

                <div id="button" className="lrow">
                    <button onClick={handleLogin}>Login</button>
                </div>
                <span id="error">{error}</span>
            </div>
        </div>
    )
}