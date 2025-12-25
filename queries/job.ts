import api from "@/providers/axios";
import { Job, ResApi } from "@/types/types";
import { AxiosInstance } from "axios";

class JobQuery {
  route = "/jobs";

  getAll = async (): Promise<Job[]> => {
    const res: ResApi<Job[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Job> => {
    const res: ResApi<Job> = await api
      .get(`${this.route}/${id}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
}

const jobQuery = new JobQuery();
export default jobQuery;
