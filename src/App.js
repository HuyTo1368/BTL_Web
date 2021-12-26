import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "./components/trangdau/Trangdau.jsx";
import Tranghai from "./components/tranghai/Trangchinh.jsx";
import Tiendo from "./components/tiendodieutra/xulitiendo";
import PhanTich from "./components/phantichsolieu/xuliphantich";
import Member from "./components/member/Member";
import AddMember from "./components/member/AddMember";
import EnterData from "./components/enter_data/EnterData";
import ListResume from "./components/list_resume/list_resume";
import Search from "./components/search_resume/search_resume";
import Success from "./components/enter_data/Success.js";
import Provider from "./components/public/storage/Provider";
import { createContext } from "react";
import axiosInstance from "./components/public/axios/axios.js";
import "./App.css";

export const Theme = createContext();

function App() {
  const [dataUser, setDataUser] = useState({ logined: false });

  const obData = {
    dataUser,
    setDataUser
  }
  useEffect(() => {
    if (!dataUser.user)
      axiosInstance
        .get("/current-user")
        .then((res) => {
          console.log("da nhan duoc");
          setDataUser({ ...res.data, logined: true });
        })
        .catch((err) => {
          throw err;
        });
  });

  return (
    <div className="App">
      <div>
        <img src="https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_C%C3%B4ng_ngh%E1%BB%87,_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_H%C3%A0_N%E1%BB%99i#/media/T%E1%BA%ADp_tin:Logo_HUET.svg"></img>
      </div>
      <>
        <Theme.Provider value={obData}>
          <Routes>
            <Route
              path="/"
              element={dataUser.logined ? <Navigate to="/Trangchu" /> : <Login />}
            />
            <Route
              path="/Trangchu"
              element={<Tranghai id={dataUser.user} value={dataUser} />}
            >
              <Route path="Tiendo" element={<Tiendo id={dataUser} />} />
              <Route path="Member" element={<Member />} />

              <Route path="addMember" element={<AddMember />} />
              <Route path="Phantich" element={<PhanTich id={dataUser} />} />

              <Route path="Nhaplieu" element={<EnterData />} />
              <Route
                path="Danhsach"
                element={<ListResume unitad={dataUser} />}
              />
              <Route path="Tracuu" element={<Search unitad={dataUser} />} />
              <Route path="Success" element={<Success />} />
            </Route>
          </Routes>
        </Theme.Provider>
      </>
    </div>
  );
}

export default App;
