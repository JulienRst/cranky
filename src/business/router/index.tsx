import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from '../home/pages/home';
import GalleryPage from '../gallery/pages/list';
import ContactPage from '../contact/pages/contact';
import routes from './routes';
import Root from 'business/root/pages/root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={routes.home}
      element={<Root />}
      children={[
        <Route key={routes.home} path={routes.home} element={<HomePage />} />,
        <Route
          key={routes.gallery}
          path={routes.gallery}
          element={<GalleryPage />}
        />,
        <Route
          key={routes.contact}
          path={routes.contact}
          element={<ContactPage />}
        />,
      ]}
    />,
  ),
);

export default function Router() {
  return <RouterProvider router={router} />;
}
