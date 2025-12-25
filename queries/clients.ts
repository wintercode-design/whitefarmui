import api from "@/providers/axios";
import { Client, ResApi } from "@/types/types";
import { AxiosInstance } from "axios";

class ClientQuery {
  route = "/clients";
  getAll = async (): Promise<Client[]> => {
    const res: ResApi<Client[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Client> => {
    const res: ResApi<Client> = await api
      .get(`${this.route}?populate=*/${id}`)
      .then((res) => res.data);
    return res.data;
  };
}

const clientQuery = new ClientQuery();
export default clientQuery;
