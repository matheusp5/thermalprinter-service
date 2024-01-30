import { Category } from "./category";

export interface Product {
  id: string;
  code: number;
  name: string;
  description: string;
  imageUrl: string;
  amount: number;
  category: Category;
  categoryId: string;
}
