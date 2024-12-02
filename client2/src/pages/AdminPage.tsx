import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { User } from "../interface/user";
import UserComponemt from "../components/UserComponent";
import BusComponent from "../components/busComponent";
import { Bus } from "../interface/bus";

export default function AdminPage() {
  const { data, GET } = useFetch("http://localhost:7891/users");
  const [users, setUsers] = useState<User[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) setUsers(data);
    // if (data) setBuses(data);
    else console.log("not users");
  }, [data]);


  return (
    <>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => {
            return <UserComponemt userProps={user} />;
          })
        ) : (
          <p> not users </p>
        )}
      </div>

      <div>
        {buses && buses.length > 0 ? (
          buses.map((bus) => {
            return <BusComponent BusProps={bus} />;
          })
        ) : (
          <p> not buses </p>
        )}
      </div>
    </>
  );
}
