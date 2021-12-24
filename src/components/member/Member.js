import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import axiosInstance from "../public/axios/axios";
import styte from "./Member.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Member() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    axiosInstance.get("./member/user").then((res) => {
      setListUser(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <Link to="./addmember">
          <Button variant="primary">Thêm tài khoản</Button>
        </Link>
      </div>
      <div className="se">
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ width: "8vw" }}>Tài khoản</th>
              <th style={{ width: "8vw" }}>Tên đơn vị</th>
              <th style={{ width: "8vw" }}>Quyền</th>
              <th style={{ width: "8vw" }}>Thời gian mở khai báo</th>
              <th style={{ width: "8vw" }}>Thời gian đóng khai báo</th>
              <th style={{ width: "8vw" }}>Trạng thái khai báo</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((val, key) => {
              return (
                <tr key={val.CCCD}>
                  <td>{val.user}</td>
                  <td>{val.PASSWORD}</td>
                  <td>{val.role}</td>
                  <td>{val.time_open}</td>
                  <td>{val.time_close}</td>
                  <td>{val.per_declare}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
