import api from "@/providers/axios";
import { Blog, ResApi } from "@/types/types";

class BlogQuery {
  route = "/blogs";

  getAll = async (): Promise<Blog[]> => {
    const res: ResApi<Blog[]> = await api
      .get(`${this.route}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
  getOne = async (id: number): Promise<Blog> => {
    const res: ResApi<Blog> = await api
      .get(`${this.route}/${id}?populate=*`)
      .then((res) => res.data);
    return res.data;
  };
}

const blogQuery = new BlogQuery();

export default blogQuery;
