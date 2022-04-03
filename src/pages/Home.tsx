import React, {useEffect, useState} from "react";
import TicketResult from "../components/TicketResult/TicketResult";
import { Api } from "../service/api";
import {Ticket} from "../types";
import { ReactComponent as DemoSearch } from "./../assets/svg/demosearch.svg";
import styles from "./Home.module.scss";
import {TicketsContext} from "../App";

type SetContextProps = {
  tickets: Ticket[];
  setTickets: (arg: Ticket[])=>void;
}

function SetContext({tickets, setTickets}: SetContextProps) {
  useEffect(() => {
    if(tickets) setTickets(tickets)
  })

  return null
}

function Home() {
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    Api.getTickets().then((tickets) => {
      const ticketsWithId = tickets.map((ticket, index) => {
        return {...ticket, id: index, }
      })
      setAllTickets(ticketsWithId);
    });
  }, []);

  return (
    <div className={styles["kombo-search"]}>
      <div className={styles["search-container"]}>
        <DemoSearch className={styles["demo-search"]} />
      </div>
        <TicketsContext.Consumer>
          {
            (context) => {
              return (
                <>
                  <SetContext tickets={allTickets} setTickets={(context && context.handleTickets) || (()=>{})}/>
                  <div className={styles["tickets-container"]}>
                    {allTickets.length > 0 ? (
                        allTickets.map((ticket, index) => {
                          return <TicketResult key={index} ticket={ticket}/>
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                  </div>
                </>
              )
            }
          }
        </TicketsContext.Consumer>
    </div>
  );
}

export default Home;
