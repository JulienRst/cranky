import { useState } from 'react';
import base from 'technical/airtable';
import { GalleryItem, RawGalleryItem } from '../type';

async function getItems(): Promise<GalleryItem[]> {
  const rawItems = await base<RawGalleryItem>('Projects')
    .select({
      sort: [
        {
          field: 'order',
          direction: 'asc',
        },
      ],
    })
    .all();

  return rawItems
    .filter((record) => {
      // Safe uses of attachment files
      return (
        record.get('slug') !== '' &&
        record.get('detailFile') &&
        record.get('galleryFile') &&
        record.get('detailFile').length > 0 &&
        record.get('galleryFile').length > 0
      );
    })
    .map((record) => ({
      ...record.fields,
      id: record.getId(),
      etsyLink: record.get('etsyLink') !== '' ? record.get('etsyLink') : null,
      unGrandMarcheLink:
        record.get('unGrandMarcheLink') !== ''
          ? record.get('unGrandMarcheLink')
          : null,
      detailFile: record.get('detailFile')[0],
      galleryFile: record.get('galleryFile')[0],
    }));
}

export function useGallery() {
  const [state, setState] = useState<{
    loading: boolean;
    items: GalleryItem[] | undefined;
  }>({
    loading: false,
    items: undefined,
  });

  const { loading, items } = state;

  if (!loading && !items) {
    setState({
      items,
      loading: true,
    });
    (async function get() {
      const newItems = await getItems();
      setState({
        items: newItems,
        loading: false,
      });
    })();
  }

  return { loading, items };
}
