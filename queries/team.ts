import api from "@/providers/axios";
import { ResApi, Team } from "@/types/types";
import { AxiosInstance } from "axios";

class TeamQuery {
  route = "/teams";
  getAll = async (): Promise<Team[]> => {
    const res: ResApi<Team[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Team> => {
    const res: ResApi<Team> = await api
      .get(`${this.route}?populate=*/${id}`)
      .then((res) => res.data);
    return res.data;
  };
}

const teamQuery = new TeamQuery();
export default teamQuery;
