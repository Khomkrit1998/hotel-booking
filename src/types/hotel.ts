export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  description: string;
}

export interface SearchFormData {
  destination: string;
  checkinDate: string;
  checkoutDate: string;
}
