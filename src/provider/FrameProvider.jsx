import { ThemeProvider } from "@material-tailwind/react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persister, store } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

/* eslint-disable react/prop-types */
export default function FrameProvider({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <ThemeProvider>
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              {children}
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}
