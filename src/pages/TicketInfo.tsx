import React, {useContext} from "react";
import { useLocation } from "react-router-dom";

import styles from "./TicketInfo.module.scss";
import {TicketsContext} from "../App";
import {TransportIcon} from "../components/TransportIcon";
import {CompanyLogo} from "../components/CompanyLogo";
import {ContextData} from "../types";
import {parseDate, parseTime} from "../helpers";


export default function TicketInfo() {
  const contextTickets = useContext<ContextData | undefined>(TicketsContext);
  const {pathname} = useLocation();

  let price, segments;

  if (contextTickets && contextTickets.tickets) {
    const ticket = contextTickets.tickets.find((ticket) => {
      return ticket.id === +pathname[pathname.length - 1]
    })

    price = (ticket?.price && Math.round(ticket.price)) || ''
    segments = ticket?.segments
  }

  // get this information from the ticket that the user selected.
  const date = parseDate((segments && segments[0].departure.time) || '');
  const departureTime = parseTime((segments && segments[0].departure.time) || '');
  const departureCity = segments && segments[0].departure.city;
  const departureStation = segments && segments[0].departure.station;
  const arrivalTime = parseTime((segments && segments[0].arrival.time) || '');
  const arrivalCity = segments && segments[0].arrival.city;
  const arrivalStation = segments && segments[0].arrival.station;

  return (
    <div className={styles["ticket-info"]}>
      <div className={styles["ticket"]}>
        <div className={styles["date"]}>{date}</div>
        {/* keep in mind, trip should be repeated for the number of trips on the ticket */}
        {segments && segments.map((segment, index) => (
          <div key={index} className={styles["trip"]}>
            <div className={styles["departure"]}>
              <p className={styles["time"]}>{departureTime}</p>
              <div className={styles["location"]}>
                <p className={styles["city"]}>{departureCity}</p>
                <p className={styles["station"]}>{departureStation}</p>
              </div>
            </div>
            <div className={styles["transport-type"]}>
              <TransportIcon transportType={segment.transportType}/>
              <CompanyLogo companySlug={segment.companySlug}/>
            </div>
            <div className={styles["arrival"]}>
              <p className={styles["time"]}>{arrivalTime}</p>
              <div className={styles["location"]}>
                <p className={styles["city"]}>{arrivalCity}</p>
                <p className={styles["station"]}>{arrivalStation}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles["price"]}>Total Price: {price + " €"}</div>
      </div>
    </div>
  );
}
