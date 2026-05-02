import { useHealth } from "@api/query";

export const App = () => {
  const { data, isPending, isError } = useHealth();

  return (
    <div>
      <span>Hello World</span>
      {isPending && <span>Loading...</span>}
      {isError && <span>Error fetching health</span>}
      {data && <span>{JSON.stringify(data, null, 2)}</span>}
    </div>
  );
};
