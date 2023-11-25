import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>Hellow World</div>
      <h1> </h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
