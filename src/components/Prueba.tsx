import * as React from "react";
interface DadJokeResponse {
  id: string;
  joke: string;
  status: 200;
}
interface FetchState {
  state: "loading" | "error" | "data";
  data: null | DadJokeResponse;
  error: null | Error;
}

interface FetchDataAction {
  type: "data";
  data: DadJokeResponse;
}
interface FetchErrorAction {
  type: "error";
  error: Error;
}
interface FetchLoadingAction {
  type: "loading";
}
type FetchActions = FetchDataAction | FetchErrorAction | FetchLoadingAction;

function fetchReducer(state: FetchState, action: FetchActions): FetchState {
  switch (action.type) {
    case "data":
      return { state: "data", data: action.data, error: null };
    case "error":
      return { state: "error", data: null, error: action.error };
    case "loading":
      return { state: "loading", data: null, error: null };
  }
  return state;
}

export function useFetch(url: string) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    state: "loading",
    data: null,
    error: null,
  });

  React.useEffect(() => {
    async function performFetch() {
      try {
        const response = await fetch(url, {
          headers: {
            accept: "application/json",
          },
        });
        const data: DadJokeResponse = await response.json();
        dispatch({ type: "data", data });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }
    dispatch({ type: "loading" });
    performFetch();
  }, [url]);
  return state;
}
