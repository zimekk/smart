import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@dev/web";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
