export type UserAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type User = {
  userName: string;
  email: string;
  password: string;
  address?: UserAddress[];
  role?: 'user' | 'admin'; // optional because default is "user"
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserResponse = {
  msg: string;
  data: User;
};
