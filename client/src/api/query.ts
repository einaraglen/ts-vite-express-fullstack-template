import { HealthResponse } from "@server/models/health";
import { useQuery } from "@tanstack/react-query";

export const useHealth = () => {
  return useQuery<HealthResponse>({
    queryKey: ["health"],
    queryFn: () => fetch("/api/health").then((r) => r.json()),
  });
};
