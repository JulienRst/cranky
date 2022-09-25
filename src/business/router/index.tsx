import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from '../home/pages/home';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
