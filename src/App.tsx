import { Counter } from "./components/Counter";
import { Usario } from "./components/Usario";

import { TimePadre } from "./components/TimePadre";
import { ContadorRed } from "./components/ContadorRed";

function App() {
  return (
    <div className="container">
      <h1>HOla Mundo</h1>
      <hr />
      <Counter />
      <hr />
      <Usario />
      <hr />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimePadre />
      <h2>useReducer</h2>
      <hr />
      <ContadorRed />
    </div>
  );
}

export default App;
