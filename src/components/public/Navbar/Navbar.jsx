import React from "react";
import './Navbar.css'
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function Navbar(props) {
    const handleLogout = () => {
        cookies.remove('token', { path: '/' });
        
      }

    return (
        <div className="tieude">
            <div className="logo_danso">
                <img src="https://data.gov.vn/o/govTheme/images/gov/logo_cong.svg" />
            </div>
            <div className="khungphai">
                <div>Xin chào {props.id} | </div>
                <a href="/" onClick={handleLogout}>Đăng xuất</a>
            </div>
        </div>
    )
}