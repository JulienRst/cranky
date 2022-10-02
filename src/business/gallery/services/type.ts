import { Attachment } from 'airtable';

// Airtable attachment are only available as array

export type RawGalleryItem = {
  id: string;
  order: number;
  slug: string;
  name: string;
  galleryFile: ReadonlyArray<Attachment>;
  detailFile: ReadonlyArray<Attachment>;
  alternativeText: string;
  description: string;
  formatDescription: string;
  unGrandMarcheLink: string;
  etsyLink: string;
};

export interface GalleryItem {
  id: string;
  name: string;
  slug: string;
  galleryFile: Attachment;
  detailFile: Attachment;
  alternativeText: string;
  description: string;
  formatDescription: string;
  unGrandMarcheLink: string | null;
  etsyLink: string | null;
}
