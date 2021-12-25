import React, { useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import Login from "./components/trangdau/Trangdau.jsx";
import Tranghai from "./components/tranghai/Trangchinh.jsx";
import { Tiendo } from "./components/tiendodieutra/tiendodieutra";
import PhanTich from "./components/phantichsolieu/phantichsolieu";
import Member from "./components/member/Member";
import AddMember from "./components/member/AddMember";
import EnterData from "./components/enter_data/EnterData";
import "./App.css";
import ListResume from "./components/list_resume/list_resume";
import Search from "./components/search_resume/search_resume";
import Success from "./components/enter_data/Success.js";
import Provider from "./components/public/storage/Provider";
import { createContext } from "react";
import axiosInstance from "./components/public/axios/axios.js";
export const Theme = createContext();

function App() {
  const [dataUser, setDataUser] = useState({ logined: false });
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
  }, []);

  return (
    <div className="App">
      <>
        <Theme.Provider value={dataUser}>
          <Routes>
            <Route
              path="/"
              element={
                dataUser.logined ? <Navigate to="/Trangchu" /> : <Login />
              }
            />
            <Route
              path="/Trangchu"
              element={ <Tranghai />}
            >
              <Route path="Tiendo" element={<Tiendo />} />
              <Route path="Member" element={<Member />} />
              <Route path="Phantich" element={<PhanTich />} />
              <Route path="addMember" element={<AddMember />} />
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
