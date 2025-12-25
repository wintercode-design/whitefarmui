import api from "@/providers/axios";
import { Info, ResApi } from "@/types/types";
import { AxiosInstance } from "axios";

class InfoQuery {
  route = "/infos";
  getAll = async (): Promise<Info[]> => {
    const res: ResApi<Info[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Info> => {
    const res: ResApi<Info> = await api
      .get(`${this.route}?populate=*/${id}`)
      .then((res) => res.data);
    return res.data;
  };
}
const infoQuery = new InfoQuery();
export default infoQuery;
