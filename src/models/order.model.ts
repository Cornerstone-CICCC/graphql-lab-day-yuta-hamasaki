import mongoose, {Schema} from "mongoose"

const OrderSchema: Schema = new Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true } ,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true } 
})


export default mongoose.model("Order", OrderSchema)