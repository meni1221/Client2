import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Line } from '../interface/line';

export default function LineComponent() {
    const { data, GET } = useFetch("http://localhost:7891/lines");
    const [lines, setLines] = useState<Line[]>([])

    useEffect(() => {
        GET();
      }, []);
    
      useEffect(() => {
        if (data) setLines(data);
        else console.log("not lines");
      }, [data]);


  return (
    <>
            <div>
        {lines && lines.length > 0 ? (
          lines.map((line) => (
            <tr>
              <th>{line.lineNumber}</th>
              <th>{line.name}</th>
              <th>{line.stations}</th>
              <th>{line.schedule.map((time)=>(
                time.arrivalTime
              ))}</th>
              <th>{line.schedule.map((time)=>(
                time.departureTime
              ))}</th>
              <th>{line.schedule.map((time)=>(
                time.station
              ))}</th>
            </tr>
          ))
        ) : (
          <p> not users </p>
        )}
      </div>
    </>
  )
}

