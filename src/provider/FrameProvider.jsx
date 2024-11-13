import { ThemeProvider } from "@material-tailwind/react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";

/* eslint-disable react/prop-types */
export default function FrameProvider({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
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
      </Provider>
    </StrictMode>
  );
}
