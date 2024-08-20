import { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/users";
export const loginHooks = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const req = await fetch(url);
      const res = await req.json();
      setUsers(res);
    };

    fetchUsers();
  }, []);

  return users;
};
