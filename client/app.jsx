import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
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