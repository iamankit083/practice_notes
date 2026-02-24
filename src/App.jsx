import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function ThemeWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}

const router = createBrowserRouter([
  // Public routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  // Protected routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ThemeWrapper>
          <Home />
        </ThemeWrapper>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pastes",
    element: (
      <ProtectedRoute>
        <ThemeWrapper>
          <Paste />
        </ThemeWrapper>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <ProtectedRoute>
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <ViewPaste />
        </div>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;