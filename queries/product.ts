import api from "@/providers/axios";
import { Product, ResApi } from "@/types/types";
import { AxiosInstance } from "axios";

class ProductQuery {
  route = "/products";
  getAll = async (): Promise<Product[]> => {
    const res: ResApi<Product[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Product> => {
    const res: ResApi<Product> = await api
      .get(`${this.route}/${id}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
}

const productQuery = new ProductQuery();
export default productQuery;
