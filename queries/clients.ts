import api from "@/providers/axios";
import { Client } from "@/types/types";
import { AxiosInstance } from "axios";

export default class ClientQuery {
  route = "/clients";
  getAll = async (): Promise<Client[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Client> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
