
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VendorCardProps {
  logo: string;
  name: string;
  distance: string | number;
  description: string;
  location: string;
  categories: string[];
  ratings: number;
  onFavorite: () => void;
  onViewPage: () => void;
}
