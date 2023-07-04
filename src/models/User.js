import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let UserModel;
try {
  UserModel = mongoose.model("Users");
} catch (error) {
  UserModel = mongoose.model("Users", userSchema);
}

export default UserModel;
