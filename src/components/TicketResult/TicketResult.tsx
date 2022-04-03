import React from "react";
import { Link } from "react-router-dom";
import { Ticket } from "../../types";
import { CompanyLogo } from "../CompanyLogo";
import { TransportIcon } from "../TransportIcon";
import styles from "./TicketResult.module.scss";
import {parseTime} from "../../helpers";


export default function TicketResult({ ticket }: { ticket: Ticket }) {
  if (!ticket) return null;
  const companySlugs = ticket.segments.map((segment) => segment.companySlug);

  const firstTrip = ticket.segments[0];
  const lastTrip = ticket.segments[ticket.segments.length - 1];

  // sample ways to use the data:
  const price = "€"+Math.round(ticket.price);
  const departureTime = parseTime(firstTrip.departure.time);
  const arrivalTime = parseTime(lastTrip.arrival.time);

  return (
    <Link to={`/ticket/${ticket.id}`}>
      <div className={styles["ticket"]}>
        <div className={styles["ticket-transport"]}>
          {/* we will always only display the first transport type */}
          <TransportIcon transportType={firstTrip.transportType} />

          {/* we will always display all the companies */}
          {companySlugs.map((slug, i) => (
            <div key={i} className={styles["company-logo"]}>
              <CompanyLogo companySlug={slug} />
            </div>
          ))}
        </div>

        {/* its your job to make this pretty :) */}
        <div className={styles["ticket-info"]}>
          <div className={styles["ticket-time"]}>
            <div>{departureTime}</div>
            <div>{arrivalTime}</div>
          </div>
          <div className={styles["ticket-location"]}>
            <div><span>{firstTrip.departure.city}</span>{" "}<span>{firstTrip.departure.station}</span></div>
            <div><span>{lastTrip.arrival.city}</span>{" "}<span>{firstTrip.departure.city}</span></div>
          </div>
          <div className={styles["ticket-price"]}>{price}</div>
        </div>
      </div>
    </Link>
  );
}
