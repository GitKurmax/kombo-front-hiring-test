export type TransportType = "train" | "bus" | "flight";

export type CompanySlug = "sncf" | "inoui" | "flixbus" | "airfrance";

export type Segment = {
  transportType: TransportType;
  companySlug: CompanySlug;
  departure: {
    city: string;
    station: string;
    time: string;
  };
  arrival: {
    city: string;
    station: string;
    time: string;
  };
};

export type Ticket = {
  id: number;
  price: number;
  segments: Segment[];
};

export type ContextData = Ticket[] | null;
