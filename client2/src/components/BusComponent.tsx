import { useEffect, useState } from "react";
import { Bus } from "../interface/bus";
import useFetch from "../hooks/useFetch";
interface Props{
  busProps:Bus
}
export default function BusComponent({busProps}:Props) {
  const { data, GET } = useFetch("http://localhost:7891/users");
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
          buses.map((bus) => (
            <tr>
              <th>{busProps.licensePlate}</th>
              <th>{busProps.busModel}</th>
              <th>{busProps.capacity}</th>
              <th>{busProps.status}</th>
              <th>{busProps.driverID}</th>
              <th>{busProps.routeID}</th>
            </tr>
          ))
        ) : (
          <p> not users </p>
        )}
      </div>
    </>
  );
}
