import api from "@/providers/axios";
import { History, ResApi } from "@/types/types";
import { AxiosInstance } from "axios";

class HistoryQuery {
  route = "/histories";
  getAll = async (): Promise<History[]> => {
    const res: ResApi<History[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<History> => {
    const res: ResApi<History> = await api
      .get(`${this.route}/${id}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
}
const historyQuery = new HistoryQuery();
export default historyQuery;
