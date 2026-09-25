import React from "react";
import VehiclePage from "../VehiclePage";
import { getVehicle } from "../fleet";

const AnahitaPage = () => <VehiclePage vehicle={getVehicle("anahita")} />;

export default AnahitaPage;
