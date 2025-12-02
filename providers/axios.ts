// lib/axios.ts
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// export const dynamic = "force-dynamic";
export default class AxiosConfig {
  public api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
