// import { useContext, useState, useRef } from "react";
import "./EnterData.css";

const EnterData = () => {
  return (
    <div>
      <div className="container-declaration">
        <div className="title"> Nhập liệu về dân số</div>
        <form className="form-declaration">
          <div className="info " >
            <div className="inputBox ">
              <span className="details"> Họ và tên</span>
              <input
                name="name"
                type="text"
                required
                className="center"
                // value={data.name}
              />
            </div>

            <div className="inputBox " >
              <span className="details"> Ngày sinh</span>
              <input name="DOB" className = "center" type="date" required value={null} />
            </div>

            <div className="inputBox ">
              <span className="details"> Số CCCD/CMND</span>
              <input
                name="CCCD"
                type="text"
                required
                className = "center"
                // value={data.CCCD}
              />
            </div>

            <div className="inputBox center">
              <span className="details"> Quê quán</span>
              <input
                name="idAddress"
                type="text"
                required
                className = "center"
                // value={data.idAddress}
              />
            </div>

            <div className="inputBox center">
              <span className="details"> Địa chỉ thường trú</span>
              <input
                name="idAddress"
                type="text"
                required
                className = "center"
                // value={data.idAddress}
              />
            </div>

            <div className="inputBox center">
              <span className="details"> Địa chỉ tạm trú</span>
              <input
                name="idAddress"
                type="text"
                required
                className = "center"
                // value={data.idAddress}
              />
            </div>

            <div className="inputBox center">
              <span className="details">Trình độ học vấn</span>
              <input
                name="academicLevel"
                type="text"
                required
                className = "center"
                // value={data.academicLevel}
              />
            </div>

            <div className="inputBox center">
              <span className="details">Nghề nghiệp</span>
              <input name="job" type="text" required className = "center"/>
            </div>

            <div className="inputBox center">
              <span className="details">Tôn giáo</span>
              <input
                name="religion"
                type="text"
                required
                className = "center"
                // value={data.religion}
              />
            </div>
          </div>

          <div className="gender-info">
            <input type="radio" name="sex" id="dot1" value="nam" />
            <input type="radio" name="sex" id="dot2" value="nữ" />
            <span className="title"> Giới tính</span>
            <div className="option">
              <label htmlFor="dot1">
                <span className="dot one"></span>
                <span className="gender"> Nam</span>
              </label>

              <label htmlFor="dot2">
                <span className="dot two"></span>
                <span className="gender"> Nữ</span>
              </label>
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Nhập" />
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterData;
