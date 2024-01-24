import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App.jsx";
import { queryClient } from "./services/queryClient.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
