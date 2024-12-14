import mongoose, {Schema} from "mongoose"

const ProductSchema: Schema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice:{
    type: Number,
    required: true
  }
})


export default mongoose.model("Product", ProductSchema)