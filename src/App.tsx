import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./index.module.scss";
import Home from "./pages/Home";
import TicketInfo from "./pages/TicketInfo";

function App() {
  return (
    <HashRouter>
      <Header />
      <div className={styles["kombo-content"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<TicketInfo />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
