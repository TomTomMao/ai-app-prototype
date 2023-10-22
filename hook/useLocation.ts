import { Location } from "@/types";
import { Locations } from "@/public/Locations";
/**
 * @description return a list of location
 */
export default function useLocation(): Location[] {
  return Locations.map((location) => ({
    name: location.name,
    code: location.code,
  }));
}
