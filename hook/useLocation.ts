import { Location } from "@/types";
import { Locations } from "@/public/Locations";
import { useMemo } from "react";

/**
 * @description return a list of location
 */
export function useLocation(): Location[] {
  return useMemo(
    () =>
      Locations.map((location) => ({
        name: location.name,
        code: location.code,
      })),
    []
  );
}
