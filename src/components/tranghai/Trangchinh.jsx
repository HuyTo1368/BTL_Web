import React from "react";
import Menu from "../Menu/menu";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import './tranghai.css'
import { Tiendo } from "../tiendodieutra/tiendodieutra";


export default function Tranghai(props) {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="display">
                <Menu />

                <div className="khunglamviec">
                    <Tiendo />
                </div>
            </div>

            <div className="fter">
                <Footer  />
            </div>

        </div>
    )
}