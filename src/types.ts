export interface Location {
  id: number;
  name: string;
  description: string;
  lat: number;
  lon: number;
  moreInfoUrl: string;
  mainImg: string;
  imageUrls?: string[];
}
