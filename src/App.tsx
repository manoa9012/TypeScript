import { useFetch } from "./components/Prueba";
const JOKE_URL = "https://icanhazdadjoke.com/";

function App() {
  const { state, data, error } = useFetch(JOKE_URL);
  if (state === "loading") return <div>Loading...</div>;
  if (state === "error") return <div>Error:{error?.message}</div>;
  if (state === "data") return <div>{data?.joke}</div>;
  throw new Error("this should never happen.");
}

export default App;
