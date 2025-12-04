import api from "@/providers/axios";
import { History } from "@/types/types";
import { AxiosInstance } from "axios";

export default class HistoryQuery {
  route = "/histories";
  getAll = async (): Promise<History[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<History> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
