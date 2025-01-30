  export interface RootType {
    status: boolean;
    message: string;
    data: VendorApiProps[];
    metaData: MetaData;
  }

export interface VendorApiProps {
  _id: string;
  vendorId: string;
  name: string;
  categories: string[];
  description: string;
  address: string;
  business_type: string;
  products_services: ProductsService[];
  noOfLikes: number;
  location: Location;
  total_ratings: number;
  visibility: boolean;
  total_reviews: number;
  reviews: Review[];
  createdAt: string;
  plan: string;
  dist: Dist;
  vendor_status: Status[];
  minutes_away: number;
  contact?: Contact;
  addressCode?: number;
  daysUntilPickup?: number;
  categoryId?: number;
  average_rating?: number;
}

export interface ProductsService {
  _id: string;
  name: string;
  description: string;
  cost: string;
  pictures: string[];
}

export interface Location {
  coordinates: number[];
  type: string;
}

export interface Review {
  userId: string;
  fullName: string;
  rating: number;
  review: string;
  _id: string;
}

export interface Dist {
  calculated: number;
}

export interface Status {
  _id: string;
  status: string;
}

export interface Contact {
  phone_calls: string;
}

export interface MetaData {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
