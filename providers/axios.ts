// lib/axios.ts
import axios, { AxiosInstance } from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API ||
  "https://gicubuntuapi.wintercodedesign.com/api";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
