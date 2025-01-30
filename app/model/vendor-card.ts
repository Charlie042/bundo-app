interface Ratings {
  average: number;
  count: number;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VendorCardProps {
  logo: string;
  name: string;
  distance: string | number;
  description: string;
  location: string;
  categories: string[];
  ratings: Ratings;
  onFavorite: () => void;
  onViewPage: () => void;
}
