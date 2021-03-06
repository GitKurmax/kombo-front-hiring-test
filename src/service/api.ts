import axiosLib from "axios";
import { Ticket } from "../types";

const axios = axiosLib.create({
  baseURL: "//kombo-hiring.herokuapp.com/api/v2",
  timeout: 60000,
});

export const Api = {
  async getTickets() {
    const response = await axios.get<Ticket[]>("/tickets");
    return response.data;
  },
};
