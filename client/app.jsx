import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import { useAppContext } from './context/appContext.jsx';
import SharedLayout from './pages/SharedLayout.jsx';

const App = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/landing');
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
};

export default App;

/*
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

*/
