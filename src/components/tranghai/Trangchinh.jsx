import React from "react";
import { BrowserRouter, Link, Route, Routes,Outlet } from "react-router-dom";
import Menu from "../public/Menu/menu";
import Navbar from "../public/Navbar/Navbar"
import Footer from "../public/footer/footer";
import "./tranghai.css";
import { Tiendo } from "../tiendodieutra/tiendodieutra";
import { useState } from "react";
import PhanTich from "../phantichsolieu/phantichsolieu";
import Trangdau from "../trangdau/Trangdau";
import AddMember from "../member/AddMember";
import Member from "../member/Member";

export default function Tranghai(props) {
  // const Temp = () =>{
  //     return(
  //         <BrowserRouter>
  //             <Route path="/addmember" component={Member} />
  //         </BrowserRouter>
  //     )
  // }
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="display">
        <Menu />
        <div className="khunglamviec">
            <Outlet></Outlet>
        </div>
      </div>
      <div className="fter">
        <Footer />
      </div>
    </div>
  );
}
