import React from "react";
import { CompanySlug } from "../types";
import { ReactComponent as AirfranceLogo } from "../assets/svg/companies/airfrance.svg";
import { ReactComponent as FlixbusLogo } from "../assets/svg/companies/flixbus.svg";
import { ReactComponent as InouiLogo } from "../assets/svg/companies/inoui.svg";
import { ReactComponent as SncfLogo } from "../assets/svg/companies/sncf.svg";

type Props = {
  companySlug: CompanySlug;
};
export function CompanyLogo({ companySlug }: Props) {
  switch (companySlug) {
    case "sncf":
      return <SncfLogo />;
    case "inoui":
      return <InouiLogo />;
    case "flixbus":
      return <FlixbusLogo />;
    case "airfrance":
      return <AirfranceLogo />;
    default:
      return null;
  }
}
