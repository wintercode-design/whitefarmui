import AxiosConfig from "@/providers/axios";
import { Job } from "@/types/types";
import { AxiosInstance } from "axios";

export default class JobQuery {
  route = "/jobs";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Job[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Job> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
