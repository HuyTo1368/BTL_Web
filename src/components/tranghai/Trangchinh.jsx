import React from "react";
import { BrowserRouter, Route, Outlet, useNavigate } from "react-router-dom";
import Menu from "../public/Menu/menu";
import Navbar from "../public/Navbar/Navbar"
import Footer from "../public/footer/footer";
import "./tranghai.css";
import Member from "../member/Member";
import { useContext } from "react";
import { Theme } from "../../App";

export default function Tranghai(props) {
  const Temp = () => {
    return (
      <BrowserRouter>
        <Route path="/addmember" component={Member} />
      </BrowserRouter>
    )
  }
  // const navigate =useNavigate()
  const t = useContext(Theme)
  // if(!t.token){
  //   console.log("da chuyen huong");
  //   navigate('/')
  //   window.location.reload();
  // }
  return (
    <div>
      <div>
        <Navbar id={props.id} />
      </div>

      <div className="display">
        <Menu value = {props.value}/>
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
