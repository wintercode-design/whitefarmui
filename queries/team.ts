import AxiosConfig from "@/providers/axios";
import { Team } from "@/types/types";
import { AxiosInstance } from "axios";

export default class TeamQuery {
  route = "/teams";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Team[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Team> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
