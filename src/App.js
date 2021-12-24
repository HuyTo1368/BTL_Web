import React from "react";
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
import Provider from "./components/public/storage/Provider.js";
import { createContext } from "react";

export const Theme = createContext();

function App() {
  const [state, setState] = useState({});
  console.log(state);
  return (
    <div className="App">
      <>
        <Theme.Provider value={state}>
          <Routes>
            <Route
              path="/"
              element={
                state.token ? (
                  <Navigate to="/Trangchu" />
                ) : (
                  <Login getJWT={setState} />
                )
              }
            />

            <Route path="/Trangchu" element={<Tranghai />}>
              <Route path="Tiendo" element={<Tiendo />} />
              <Route path="Member" element={<Member />} />
              <Route path="Phantich" element={<PhanTich />} />
              <Route path="Member/addMember" element={<AddMember />} />
              <Route path="Nhaplieu" element={<EnterData/>} />
              <Route path="Danhsach" element={<ListResume unitad = {state}/>} />
              <Route path="Tracuu" element={<Search unitad = {state}/>} />
              <Route path="Success" element={<Success/>} />
            </Route>
          </Routes>
        </Theme.Provider>
      </>
    </div>
  );
}

export default App;
