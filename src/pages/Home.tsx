import React, { useEffect, useState } from "react";
import TicketResult from "../components/TicketResult/TicketResult";
import { Api } from "../service/api";
import { Ticket } from "../types";
import { ReactComponent as DemoSearch } from "./../assets/svg/demosearch.svg";
import styles from "./Home.module.scss";

function Home() {
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    Api.getTickets().then((tickets) => {
      setAllTickets(tickets);
    });
  }, []);

  return (
    <div className={styles["kombo-search"]}>
      <div className={styles["search-container"]}>
        <DemoSearch className={styles["demo-search"]} />
      </div>
      <div className={styles["tickets-container"]}>
        {allTickets.length > 0 ? (
          allTickets.map((ticket, index) => (
            <TicketResult key={index} ticket={ticket} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
