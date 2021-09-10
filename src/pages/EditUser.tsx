import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, UpdateUser } from "../redux/actions/userActions";
import { User } from "../redux/types/userTypes";
import { RootState } from "../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const EditUser = () => {
  const history = useHistory();
  const [state, setState] = useState<User>({});
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { id } = useParams();
  const id = 2;
  const { user } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState(user);
      console.log("user", user);
    }
  }, [user]);

  const validations = Yup.object({
    email: Yup.string(),
    first_name: Yup.string(),
  });

  const formik = useFormik<User>({
    initialValues: state,
    onSubmit: (values) => {
      console.log(formik.values);
    },
    validationSchema: validations,
    validateOnChange: true,
    validateOnBlur: false,
  });

  return (
    <div>
      <Button
        style={{ width: "120px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
      <h2>Edit User</h2>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <TextField
          id="standard-basic"
          label="First Name"
          name="first_name"
          type="text"
          value={formik.values.first_name}
        />

        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
