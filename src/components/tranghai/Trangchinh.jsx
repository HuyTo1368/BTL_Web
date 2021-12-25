import React from "react";
import { BrowserRouter,  Route, Outlet } from "react-router-dom";
import Menu from "../public/Menu/menu";
import Navbar from "../public/Navbar/Navbar"
import Footer from "../public/footer/footer";
import "./tranghai.css";
import Member from "../member/Member";
import { useContext } from "react";
import { Theme } from "../../App";

export default function Tranghai(props) {
  const Temp = () =>{
      return(
          <BrowserRouter>
              <Route path="/addmember" component={Member} />
          </BrowserRouter>
      )
  }
  const t = useContext(Theme)
  return (
    <div>
      <div>
        <Navbar id = {props.id}/>
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
       // <div className="display">
            //     <Menu />
            //     <div className="khunglamviec">
            //         <div className="Long_1"><Tiendo/></div>
            //     </div>
            // </div>
            // <div className="fter">
            //     <Footer  />
            // </div>
  );
}
