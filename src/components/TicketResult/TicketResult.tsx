import React from "react";
import { Link } from "react-router-dom";
import { Ticket } from "../../types";
import { CompanyLogo } from "../CompanyLogo";
import { TransportIcon } from "../TransportIcon";
import styles from "./TicketResult.module.scss";

const parseTime = (date: string) => {
  const time = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export default function TicketResult({ ticket }: { ticket: Ticket }) {
  if (!ticket) return null;

  const companySlugs = ticket.segments.map((segment) => segment.companySlug);

  const firstTrip = ticket.segments[0];
  const lastTrip = ticket.segments[ticket.segments.length - 1];

  // sample ways to use the data:
  const price = Math.round(ticket.price) + " €";
  const departureTime = parseTime(firstTrip.departure.time);
  const arrivalTime = parseTime(lastTrip.arrival.time);

  return (
    <Link to="/ticket">
      <div className={styles["ticket"]}>
        <div>
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
        <p>{JSON.stringify(ticket)}</p>
      </div>
    </Link>
  );
}
