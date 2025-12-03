import AxiosConfig from "@/providers/axios";
import { Info } from "@/types/types";
import { AxiosInstance } from "axios";

export default class InfoQuery {
  route = "/infos";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Info[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Info> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
