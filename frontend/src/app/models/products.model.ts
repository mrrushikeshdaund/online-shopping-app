export type ProductReview = {
  userId: string; // ObjectId as string
  comment?: string;
  rating?: number;
  createdAt?: Date;
};

export type Product = {
  name: string;
  category: string;
  sex: 'Male' | 'Female' | 'Unisex';
  size: string[]; // e.g., ['S', 'M', 'L']
  color: string;
  brand: string;
  rating?: number; // average rating
  reviews?: ProductReview[];
  offerPrice: number;
  stock: number;
  imageUrl: string[]; // array of image URLs
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface ProductResponse {
  msg: string;
  data: Product[];
}
