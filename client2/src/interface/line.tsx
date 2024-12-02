export interface Line extends Document {
    lineNumber: string;
    name: string;
    stations: string[];
    schedule: { departureTime: string; arrivalTime: string; station: string }[];
  }