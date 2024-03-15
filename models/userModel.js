import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //whiteSpaceGetsRemoved
    },
    email: {
      type: String,
      required: true,
      unique: true, // ek emailId se sirf ek hi user login hona chahiye
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, //0 matlab false 1 matlab true
    },
  },
  { timestamps: true }
); //jab bhi new user add hoga to uska created time add ho jaayega

export default mongoose.model("users", userSchema);
