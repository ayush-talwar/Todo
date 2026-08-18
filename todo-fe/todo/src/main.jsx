import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import store from "./store/index.js"
import './index.css'
import Login from './routes/login.jsx'
import App from './App.jsx'
import Register from './routes/Register.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <App /> },
  { path: "/register", element: <Register />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
