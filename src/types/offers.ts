export type TypeOffers = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: TypeCity;
    location: TypeLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
}

export type TypeCity = {
  name: string;
  location: TypeLocation;
}

export type TypeLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}
