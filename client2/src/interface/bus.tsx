export interface Bus extends Document {
    licensePlate: string;
    busModel: string;
    capacity: number;
    status: "service" | "out of service" | "maintenance";
    driverID: string;
    routeID: string;
  }