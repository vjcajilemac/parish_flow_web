import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./route/AppRoutes.tsx"; // Cambia esta línea a tu ruta de AppRouter

import { store } from '@/redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <AppRouter /> {/* Usa AppRouter de react-router-dom */}
    </Provider>
  </StrictMode>
);