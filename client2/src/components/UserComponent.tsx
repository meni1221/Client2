import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useFetch from "../hooks/useFetch";
import { User } from "../interface/user";

interface Props {
  userProps: User;
}
export default function UserComponemt({userProps}:Props) {
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
            <tr>
              <th>{userProps.name}</th>
              <th>{userProps.email}</th>
              <th>{userProps.role}</th>
            </tr>
      </div>
    </>
  );
}
