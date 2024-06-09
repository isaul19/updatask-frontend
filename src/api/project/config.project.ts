import { QueryClient } from "react-query";

export const PROJECT_QUERY_KEY = "projects";

export const refreshProjectQuery = (...keys: unknown[]) => {
  const client = new QueryClient();
  const QUERY_KEY = keys.length === 0 ? [PROJECT_QUERY_KEY] : [PROJECT_QUERY_KEY, ...keys];

  client.invalidateQueries({
    queryKey: QUERY_KEY,
  });
};
