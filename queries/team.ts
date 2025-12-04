import api from "@/providers/axios";
import { Team } from "@/types/types";
import { AxiosInstance } from "axios";

export default class TeamQuery {
  route = "/teams";
  getAll = async (): Promise<Team[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Team> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
