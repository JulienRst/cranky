import { generatePath } from 'react-router-dom';

const routes = {
  home: '/',
  gallery: '/galerie',
  detail: '/galerie/:slug',
  contact: '/contact',
};

export const detailPage = (slug: string) =>
  generatePath(routes.detail, { slug });

export default routes;
