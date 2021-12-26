import React from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import './AddMember.css'
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddMember.css";
import axiosInstance from "../public/axios/axios";

export default function AddMember() {
  const [state, setState] = useState({
    name: '',
    user: "",
    password: "",
    passwordAgain: "",

  });
  // console.log(state);
  const [alertUp, setAlertUp] = useState(false)
  const checkEmpty = () => {
    if (state.user && state.password && state.passwordAgain && state.name) {
      return true;
    }
    return false;
  };
  const checkPassWordAgain = () => {
    if (state.password === state.passwordAgain) {
      setAlertUp(false);
      return true;
    } else {
      setAlertUp(true);
      return false;
    }
  };
  // const t = checkPassWordAgain()
  const sendAPI = () => {
    if (checkEmpty() && checkPassWordAgain()) {
      const temp = state
      delete temp.passwordAgain
      axiosInstance.post("/member/add", temp).then((res) => {
        if (res.data === 'Ok') {
          console.log("dc");
        }
      });


    }
  };

  return (
    <div>
      <br />
      <h1 lassName="tabletadd">Tạo tài khoản cho A1</h1>
      <br />
      <br />
      <br />

      <div className="containerr">
        <div className="form-group row">
          <label htmlFor="staticName" className="col-sm-3 col-form-label">
            Tên Tỉnh
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="staticName"
              required
              placeholder="name"
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
            Tài khoản
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              required
              placeholder="id"
              onChange={(e) => setState({ ...state, user: e.target.value })}
            />
          </div>
        </div>
        <br></br>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
            Mật khẩu
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              required
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            htmlFor="inputPasswordAgain"
            className="col-sm-3 col-form-label"
          >
            Nhập lại
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              required
              id="inputPasswordAgain"
              placeholder="Enter Password again"
              onChange={(e) =>
                setState({ ...state, passwordAgain: e.target.value })
              }
            />
            {alertUp && <p className="alert">*Mật khẩu không khớp</p>}
          </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary " onClick={sendAPI}>
          Xác nhận
        </button>
      </div>
    </div>
  );
}
