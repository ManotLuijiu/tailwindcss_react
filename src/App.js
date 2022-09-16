import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { JustifyContent } from './pages';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <JustifyContent />,
  },
]);

function App() {
  return (
    <div className="max-w-[768px] mt-4 -mb-3">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
