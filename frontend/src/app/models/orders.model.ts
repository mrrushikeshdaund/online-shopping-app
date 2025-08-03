export type OrderProduct = {
  productId: string; // ObjectId as string
  quantity: number;
  priceAtPurchase: number;
};

export type DeliveryAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type Orders = {
  userId: string;
  products: OrderProduct[];
  totalAmount: number;
  paymentMethod: 'Card' | 'CashOnDelivery' | 'UPI';
  paymentStatus?: 'Pending' | 'Paid' | 'Failed';
  orderStatus?: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  deliveryAddress: DeliveryAddress;
  orderedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};
