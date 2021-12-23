import React from "react";
import { Routes, Route } from "react-router";

import Trangdau from "./components/trangdau/Trangdau.jsx";
import Tranghai from "./components/tranghai/Trangchinh.jsx";
import { Tiendo } from "./components/tiendodieutra/tiendodieutra";
import PhanTich from "./components/phantichsolieu/phantichsolieu";
import Member from "./components/member/Member";
import AddMember from "./components/member/AddMember";
import EnterData from "./components/enter_data/EnterData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Trangdau />} />
          <Route path="/Trangchu" element={<Tranghai />}>
              <Route path="Tiendo" element={<Tiendo />} />
              <Route path="Member" element={<Member />} />
              <Route path="Phantich" element={<PhanTich />} />
              <Route path="Member/addMember" element={<AddMember />} />
              <Route path="Nhaplieu" element={<EnterData/>} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
