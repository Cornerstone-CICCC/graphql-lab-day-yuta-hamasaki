import mongoose, {Schema} from "mongoose"

const CustomerSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }
})

export default mongoose.model("Customer", CustomerSchema)