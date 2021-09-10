import { Switch, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import { Users } from "../pages/Users";

export const Rutas = () => {
  return (
    <Switch>
      <Route path="/addUser" component={AddUser} />
      <Route path="/editUser" component={EditUser} />
      <Route path="/" component={Users} />
    </Switch>
  );
};
