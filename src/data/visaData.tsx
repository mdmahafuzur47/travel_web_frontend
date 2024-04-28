import { ApartmentIcon, BusIcon, CruiseIcon, FlightIcon, GlobeIcon, HotelIcon, VisaIcon } from "@/components/icons";
import { ReactElement } from "react";

export interface ITabsData {
    name: string;
    icon: ReactElement,
  }
  
export const tabsData: ITabsData[] = [
    {
      name: "Flights",
      icon: <FlightIcon/>
    },
    {
      name: "Tours",
      icon: <GlobeIcon />
    },
    {
      name: "Visa",
      icon: <VisaIcon />
    },
    {
      name: "Hotels",
      icon: <HotelIcon />
    },
    {
      name: "Apartments",
      icon: <ApartmentIcon />
    },
    {
      name: "Bus",
      icon: <BusIcon />
    },
    {
      name: "Cruise",
      icon: <CruiseIcon />
    }
  ]
