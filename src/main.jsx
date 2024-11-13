import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FrameProvider from "./provider/FrameProvider.jsx";

createRoot(document.getElementById("root")).render(
  <FrameProvider>
    <App />
  </FrameProvider>
);
