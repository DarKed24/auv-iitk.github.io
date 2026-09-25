import React from "react";
import VehiclePage from "../VehiclePage";
import { getVehicle } from "../fleet";

const VarunPage = () => <VehiclePage vehicle={getVehicle("varun")} />;

export default VarunPage;
