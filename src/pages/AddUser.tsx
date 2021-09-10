import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import { UserAdd } from "../redux/types/userTypes";
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

const AddUser = () => {
  const history = useHistory();
  const [state, setState] = useState<UserAdd>({
    name: "",
    job: "",
  });
  const { name, job } = state;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  /*  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!name || !job) {
      setError("All field requireds");
      console.log(error);
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  }; */
  const initialValues = useMemo(
    () => ({
      name: "",
      job: "",
    }),
    []
  );

  const validations = Yup.object({
    name: Yup.string().required(),
    job: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      dispatch(addUser(values));
      history.push("/");
      setError("");
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
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}> {error}</h3>}
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <TextField
          label="Job"
          name="job"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.job}
        />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
