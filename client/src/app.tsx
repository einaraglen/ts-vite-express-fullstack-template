import { useEffect } from "react";
import { HealthResponse } from "@server/model/health";

export const App = () => {
  const fetchHealth = async () => {
    const res = await fetch("/api/health");
    const data: HealthResponse = await res.json();
    console.log("Health response:", data);
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return <div>Hello World</div>;
};
