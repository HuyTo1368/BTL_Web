import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const tabs = [
  "Tiến độ điều tra",
  "Phân tích số liệu",
  "Danh sách dân số",
  "Tra cứu thông tin",
  "Cấp tài khoản",
  "Nhập liệu",
];

export default function Menu(props) {
  const [state, setState] = useState()
  return (
    <div>
      <div className="menu1">
        <Link to="./Tiendo">
          <button className="active" >Tiến độ điều tra</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="./Phantich">
          <button className="active">Phân tích số liệu</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="Danhsach">
          <button className="active">Danh sách dân số</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="./Tracuu">
          <button className="active">Tra cứu thông tin</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="./addMember">
          <button className="active">Cấp tài khoản</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="./Member">
          <button className="active">Quản lí tài khoản</button>
        </Link>
      </div>
      <div className="menu1">
        <Link to="./Nhaplieu">
          <button className="active">Nhập liệu</button>
        </Link>
      </div>
    </div>
  );
}
