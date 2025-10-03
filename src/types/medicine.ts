export interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  requiresPrescription: boolean;
  image: string;
  manufacturer: string;
}

export interface Order {
  id: string;
  userId: string;
  items: Array<{
    medicine: Medicine;
    quantity: number;
  }>;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
  prescriptionUrl?: string;
}
