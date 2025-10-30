export interface Product {
  _id: string;
  productImages: string[];
  name: string;
  description: string;
  price: number;
  category: string;
  inventoryCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
