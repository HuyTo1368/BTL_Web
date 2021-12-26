import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import clsx from "clsx";
export default function Menu(props) {
  const role = props.value.role;
  const chucnangA = "hidechucnang";
  const [index, setIndex] = useState("");
  console.log(index);
  const id = clsx({
    focus: (e) => (index === e.currentTarget.textContent ? true : false),
  });
  return (
    <div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="./Tiendo">
          <button
            className="active"
  
            onClick={(e) => setIndex(e.currentTarget.textContent)}
          >
            Tiến độ điều tra
          </button>
        </Link>
      </div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="./Phantich">
          <button className="active">Phân tích số liệu</button>
        </Link>
      </div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="Danhsach">
          <button className="active">Danh sách dân số</button>
        </Link>
      </div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="./Tracuu">
          <button className="active">Tra cứu thông tin</button>
        </Link>
      </div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="./addMember">
          <button className="active">Cấp tài khoản</button>
        </Link>
      </div>
      <div className="menu1" className={role === "B2" ? chucnangA : "huy"}>
        <Link to="./Member">
          <button className="active">Quản lí tài khoản</button>
        </Link>
      </div>
      <div
        className="menu1"
        className={
          role === "A1" || role === "A2" || role === "A3" ? chucnangA : "huy"
        }
      >
        <Link to="./Nhaplieu">
          <button className="active">Nhập liệu</button>
        </Link>
      </div>
    </div>
  );
}
