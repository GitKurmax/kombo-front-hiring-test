import React, {useEffect, useState} from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./index.module.scss";
import Home from "./pages/Home";
import TicketInfo from "./pages/TicketInfo";
import {Ticket} from "./types";

export const TicketsContext = React.createContext<Ticket[] | null>(null);

function App() {
  const [tickets, setTickets] = useState<Ticket[] | null>(null)

  const handleTickets = (tickets: Ticket[]) => {
      setTickets(tickets)
  }

  return (
    <HashRouter>
      <Header />
      <div className={styles["kombo-content"]}>
          <TicketsContext.Provider value={tickets}>
              <Routes>
                  <Route path="/" element={<Home handleTickets={handleTickets}/>} />
                  <Route path="/ticket/:id" element={<TicketInfo />} />
              </Routes>
          </TicketsContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
