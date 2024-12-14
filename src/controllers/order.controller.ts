import Order from "../models/order.model";
import { IOrder } from "../types/types";

const getOrders = async () => {
  const orders = await Order.find()
  return orders
}
const createOrder = async (data: Omit<IOrder, 'id'>) => {
  const order = new Order(data)
  await order.save()
  return order
}
const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, {new: true})
}
const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id)
}

export default{
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
}