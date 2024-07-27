import { useEffect, useState } from "react";
import { useStoreDispatch } from "../store/hooks";
import { setVehicle, setVehicles } from "../store/vehicleSlice";
import type Vehicle from "../types/Vehicle";

export function useFetch<T>(fetchFn: () => Promise<T>, action: string) {
  const dispatch = useStoreDispatch();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<{ message: string }>();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();

        if (action === "setVehicles") dispatch(setVehicles(data as Vehicle[]));
        if (action === "setVehicle") dispatch(setVehicle(data as Vehicle));
      } catch (error) {
        if (error instanceof Error) setError({ message: error.message });
        else setError({ message: "Failed to fetch data." });
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);

  return {
    isFetching,
    error,
  };
}
