import api from "@/providers/axios";
import { Blog } from "@/types/types";
import { AxiosInstance } from "axios";

export default class BlogQuery {
  route = "/blogs";

  getAll = async (): Promise<Blog[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Blog> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
