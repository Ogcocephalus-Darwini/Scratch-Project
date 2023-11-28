import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import SharedLayout from './pages/SharedLayout.jsx';
import UserProfile from './pages/profile.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
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
