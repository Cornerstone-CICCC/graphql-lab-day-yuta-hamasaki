export interface ICustomer{
  id: string;
  firstName: String;
  lastName: String;
  email: String;
}

export interface IProduct{
  id: string;
  productName: String;
  productPrice: Number;
}

export interface IOrder{
  id: string;
  productId: string,
  customerId:string,
}