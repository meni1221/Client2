import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useFetch from "../hooks/useFetch";
import { User } from "../interface/user";


export default function UserComponemt() {
  const { user } = useContext(AuthContext) ?? {};
  const { data, GET } = useFetch("http://localhost:7891/users");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) setUsers(data);
    else console.log("not users");
  }, [data]);

  return (
    <>
      <div>
        {users && users.length > 0 ? (
          users.map((userProps) => (
            <div>
              <th>{userProps.name}</th>
              <th>{userProps.email}</th>
              <th>{userProps.role}</th>
            </div>
          ))
        ) : (
          <p> not users </p>
        )}
      </div>
    </>
  );
}
