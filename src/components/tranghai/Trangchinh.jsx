import React from "react";
import Menu from "../Menu/menu";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import './tranghai.css'
import { Tiendo } from "../tiendodieutra/tiendodieutra";
import {useState} from "react";
import  PhanTich  from "../phantichsolieu/phantichsolieu";
export default function Tranghai(props) {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="display">
                <Menu />
                <div className="khunglamviec">
                    <div className="Long_1"><PhanTich/></div>
                </div>
            </div>
            <div className="fter">
                <Footer  />
            </div>

        </div>
    )
}