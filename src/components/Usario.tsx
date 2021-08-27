import { useState } from "react";

interface User {
  uid?: string;
  name?: string;
}

export const Usario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Manuel Alejandro",
    });
  };

  return (
    <div className="mt-3">
      <h3>Usuario: useState</h3>

      <button onClick={login} className="btn btn-outline-primary mx-2">
        Login
      </button>

      {!user ? <pre>No hay usuarios</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
