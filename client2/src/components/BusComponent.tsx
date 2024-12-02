import { useEffect, useState } from "react";
import { Bus } from "../interface/bus";
import useFetch from "../hooks/useFetch";

export default function BusComponent() {
  const { data, GET } = useFetch("http://localhost:7891/buses");
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) setBuses(data);
    else console.log("not buses");
  }, [data]);

  return (
    <>
      <div>
        {buses && buses.length > 0 ? (
          buses.map((busProps) => (
            <div>
              <p>{busProps.licensePlate}</p>
              <p>{busProps.busModel}</p>
              <p>{busProps.capacity}</p>
              <p>{busProps.status}</p>
              <p>{busProps.driverID}</p>
              <p>{busProps.routeID}</p>
            </div>
          ))
        ) : (
          <p> not buses </p>
        )}
      </div>
    </>
  );
}
