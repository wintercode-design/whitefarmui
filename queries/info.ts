import api from "@/providers/axios";
import { Info } from "@/types/types";
import { AxiosInstance } from "axios";

export default class InfoQuery {
  route = "/infos";
  getAll = async (): Promise<Info[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Info> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
