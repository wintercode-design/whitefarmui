import AxiosConfig from "@/providers/axios";
import { Blog } from "@/types/types";
import { AxiosInstance } from "axios";

export default class BlogQuery {
  route = "/blogs";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Blog[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Blog> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
