import React from "react";
import VehiclePage from "../VehiclePage";
import { getVehicle } from "../fleet";

const TarangPage = () => <VehiclePage vehicle={getVehicle("tarang")} />;

export default TarangPage;
