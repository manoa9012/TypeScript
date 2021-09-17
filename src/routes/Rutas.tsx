import { Switch, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import { Login } from "../pages/auth/Login";
import EditUser from "../pages/EditUser";
import { Users } from "../pages/Users";

export const Rutas = () => {
  return (
    <Switch>
      <Route path="/addUser" component={AddUser} />
      <Route path="/editUser" component={EditUser} />
      <Route path="/list" component={Users} />
      <Route path="/" component={Login} />
    </Switch>
  );
};
