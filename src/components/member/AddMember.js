import react from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import styte from "./Member.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMember.css'

export default function AddMember() {

  return (
    <div>
      <br/>
      <h1>Tạo tài khoản cho A1</h1>
      <br/><br/><br/>

      <form className="containerr">
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Tài khoản
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              required
              placeholder="id"
            />
          </div>
        </div>
        <br></br>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Mật khẩu
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              required
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <br/>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Nhập lại
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              required
              id="inputPassword"
              placeholder="Enter Password again"
            />
          </div>
        </div>
        <br/><br/>
        <button type="submit" class="btn btn-primary">Xác nhận</button>
      </form>
    </div>
  );
}
