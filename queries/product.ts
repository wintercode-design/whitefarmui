import AxiosConfig from "@/providers/axios";
import { Product } from "@/types/types";
import { AxiosInstance } from "axios";

export default class ProductQuery {
  route = "/products";
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = new AxiosConfig(baseURL).api;
  }
  getAll = async (): Promise<Product[]> =>
    this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number): Promise<Product> =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
}
