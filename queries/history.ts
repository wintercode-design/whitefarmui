import AxiosConfig from "@/providers/axios";
import { History } from "@/types/types";
import { AxiosInstance } from "axios";

export default class HistoryQuery {
  route = "/histories";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<History[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<History> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
