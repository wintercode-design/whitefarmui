import api from "@/providers/axios";
import { Product } from "@/types/types";
import { AxiosInstance } from "axios";

export default class ProductQuery {
  route = "/products";
  getAll = async (): Promise<Product[]> =>
    api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Product> =>
    api.get(`${this.route}/${id}`).then((res) => res.data);
}
