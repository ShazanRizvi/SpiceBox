import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from "./context/Store";
import {ProSidebarProvider} from "react-pro-sidebar"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <Store>
          <App />
        </Store>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
