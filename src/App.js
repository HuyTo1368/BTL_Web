import "./App.css";
import React from "react";
import Trangdau from "./components/trangdau/Trangdau.jsx";
import Tranghai from "./components/tranghai/Trangchinh.jsx";
import { Routes, Route } from "react-router";
import { Tiendo } from "./components/tiendodieutra/tiendodieutra";
import PhanTich from "./components/phantichsolieu/phantichsolieu";
import Member from "./components/member/Member";
import AddMember from "./components/member/AddMember";
// import BarChart from './components/ChartPie/ChartPie';

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
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
