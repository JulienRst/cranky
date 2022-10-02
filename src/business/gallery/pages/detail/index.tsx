import Detail from 'business/gallery/components/detail';
import { useGallery } from 'business/gallery/services/hooks/list';
import routes from 'business/router/routes';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type DetailPageParams = {
  slug: string;
};

const DetailPage: React.FC = () => {
  const { slug } = useParams<DetailPageParams>();
  const navigate = useNavigate();
  const { items } = useGallery();

  if (!items) {
    return null;
  }

  const item = items.find((record) => record.slug === slug);

  if (!item) {
    navigate(routes.gallery);
    return null;
  }

  return <Detail {...item} />;
};

export default DetailPage;
