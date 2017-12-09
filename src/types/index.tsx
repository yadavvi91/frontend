export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
}

export interface StoreState {
  users: Array<User>;
}
