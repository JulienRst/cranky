import { GalleryItem } from 'business/gallery/services/type';
import { detailPage } from 'business/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

interface ItemProps
  extends Pick<GalleryItem, 'alternativeText' | 'galleryFile' | 'slug'> {
  className?: string;
}

const Item: React.FC<ItemProps> = ({
  slug,
  className,
  galleryFile,
  alternativeText,
}) => {
  return (
    <Link to={detailPage(slug)}>
      <img className={className} src={galleryFile.url} alt={alternativeText} />
    </Link>
  );
};

export default Item;
