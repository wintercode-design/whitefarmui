import api from "@/providers/axios";
import { Job } from "@/types/types";
import { AxiosInstance } from "axios";

export default class JobQuery {
  route = "/jobs";

  getAll = async (): Promise<Job[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Job> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
