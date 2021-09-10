import { compose } from "redux";
export type Action = {
  type?: string;
  payload?: any;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
