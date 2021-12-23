import { useContext, useState, useRef } from "react";
import "./EnterData.css";
import axiosInstance from "../public/axios/axios";
import Select from "../public/select_address/select";
const EnterData = () => {
  const [state, setState] = useState({
    CCCD: "",
    fullName: "",
    datebirth: "",
    gender: "",
    hometown: {
        province: "",
        town: "",
        village: ""
    },
    address: "",
    region: "",
    job: "",
    study: "",
  });
  console.log(state);

  const checkEmpty = () => {
    if (
      state.CCCD &&
      state.fullName &&
      state.datebirth &&
      state.gender &&
      state.hometown &&
      state.address &&
      state.region &&
      state.job &&
      state.study
    ) {
      return true;
    }
    return false;
  };
  const sendAPI = () => {
    if (checkEmpty()) {
      axiosInstance.post("/Nhaplieu", state).then(() => {
        console.log("hh");
      });
    }
  };
  //   var checkEmply =()=>{
  //     let arrayTemp = Object.values(state);
  //     let result = 1;
  //     arrayTemp.map((e)=>{
  //           result = (e === '') ? 0:result
  //     })
  //     return result;
  // }
  // console.log(checkEmply());
  return (
    <div>
      <Select></Select>
      <div className="container-declaration">
        <div className="title"> Nhập liệu về dân số</div>
        <div className="form-declaration">
          <div className="info ">
            <div className="inputBox ">
              <span className="details"> Họ và tên</span>
              <input
                name="name"
                type="text"
                required
                className="center"
                onChange={(e) =>
                  setState({ ...state, fullName: e.target.value })
                }
                // value={data.name}
              />
            </div>

            <div className="inputBox ">
              <span className="details"> Ngày sinh</span>
              <input
                name="DOB"
                className="center"
                type="date"
                required
                value={null}
                onChange={(e) =>
                  setState({ ...state, datebirth: e.target.value })
                }
              />
            </div>

            <div className="inputBox ">
              <span className="details"> Số CCCD/CMND</span>
              <input
                name="CCCD"
                type="text"
                required
                className="center"
                onChange={(e) => setState({ ...state, CCCD: e.target.value })}
                // value={data.CCCD}
              />
            </div>

            <div className="inputBox center">
              {/* <span className="details"> Quê quán</span>
              <input
                name="idAddress"
                type="text"
                required
                className="center"
                onChange={(e) =>
                  setState({ ...state, hometown: e.target.value })
                }
                // value={data.idAddress}
              /> */}
              <span className="details"> Quê quán</span>
              <Select
                onChange={(e) =>
                  setState({ ...state, hometown: {province: e.target.value}})
                }
              ></Select>
            </div>

            <div className="inputBox center">
              <span className="details"> Địa chỉ thường trú</span>
              <input
                name="idAddress"
                type="text"
                required
                className="center"
                onChange={(e) =>
                  setState({ ...state, address: e.target.value })
                }

                // value={data.idAddress}
              />
            </div>

            {/* <div className="inputBox center">
              <span className="details"> Địa chỉ tạm trú</span>
              <input
                name="idAddress"
                type="text"
                required
                className = "center"
                // value={data.idAddress}
              />
            </div> */}

            <div className="inputBox center">
              <span className="details">Trình độ học vấn</span>
              <input
                name="academicLevel"
                type="text"
                required
                className="center"
                onChange={(e) => setState({ ...state, study: e.target.value })}
                // value={data.academicLevel}
              />
            </div>

            <div className="inputBox center">
              <span className="details">Nghề nghiệp</span>
              <input
                name="job"
                type="text"
                required
                className="center"
                onChange={(e) => setState({ ...state, job: e.target.value })}
              />
            </div>

            <div className="inputBox center">
              <span className="details">Tôn giáo</span>
              <input
                name="religion"
                type="text"
                required
                className="center"
                onChange={(e) => setState({ ...state, region: e.target.value })}
                // value={data.religion}
              />
            </div>
          </div>

          <div className="gender-info">
            <input
              type="radio"
              name="sex"
              id="dot1"
              value="Nam"
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            />
            <input
              type="radio"
              name="sex"
              id="dot2"
              value="Nữ"
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            />
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
            <input type="submit" value="Nhập" onClick={sendAPI} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterData;
