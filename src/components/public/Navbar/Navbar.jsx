import React from "react";
import './Navbar.css'

export default function Navbar(props) {
    return (
        <div className="tieude">
            <div className="logo_danso">
                <img src="https://data.gov.vn/o/govTheme/images/gov/logo_cong.svg" />
            </div>
            <div className="khungphai">
                <div>Xin chào Seo | </div>
                <a href="huy">Đăng xuất</a>
            </div>
        </div>
    )
}