import axios from "axios";

import { Env } from "@config/env.config";

export const uptaskBackend = axios.create({
  baseURL: Env.VITE_UPDATASK_BACKEND_URL,
});
