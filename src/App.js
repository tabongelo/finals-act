import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import Main from "./routes/Main";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;