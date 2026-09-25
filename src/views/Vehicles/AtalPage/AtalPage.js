import React from "react";
import VehiclePage from "../VehiclePage";
import { getVehicle } from "../fleet";

const AtalPage = () => <VehiclePage vehicle={getVehicle("atal")} />;

export default AtalPage;
