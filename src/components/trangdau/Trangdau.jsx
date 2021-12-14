import "./trangdau.css"
import React, { useRef } from 'react';

const URL_Login = 'http://localhost/xuli/handleLogin.js';

const sendData = async (url, data) => {
   const resp = fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
    console.log(resp);
    // const json = await resp.json();
    // console.log(json);
}


export default function Trangdau(props) {

    const ref_uname = useRef(null);
    const ref_pass = useRef(null);

    const handleLogin = () => {
        const data = {
            "uname": ref_uname.current.value,
            "pass": ref_pass.current.value
        };
        sendData(URL_Login, data);
    }

    return (
        <div className='background_login'>
            <div>
                <div className="input-form">
                    <span>Tên Người Dùng</span>
                    <input
                        placeholder="Username"
                        type="text"
                        name="UName"
                        id="1"
                        ref={ref_uname}
                    />
                </div>

                <div className="input-form">
                    <span>Mật Khẩu</span>
                    <input
                        placeholder="Password"
                        type="password"
                        name="Password"
                        ref={ref_pass}
                    />
                </div>
                <div className="nho-dang-nhap">
                    <label>
                        <input
                            type="checkbox"
                            name="" /> Nhớ Đăng Nhập
                    </label>
                </div>
                <div className="input-form">
                    <button
                        name="Login" onClick={handleLogin} >Login
                    </button>
                </div>
            </div>
        </div>
    )
}