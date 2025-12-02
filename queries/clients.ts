import AxiosConfig from "@/providers/axios";
import { Client } from "@/types/types";
import { AxiosInstance } from "axios";

export default class ClientQuery {
  route = "/clients";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Client[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Client> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
