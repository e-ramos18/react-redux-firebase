import React from "react";
import Store from "./redux/providers/reduxProviders";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./Main";

const { reduxStore, persister } = Store();

const App = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persister}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
