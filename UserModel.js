import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
});

const Users = mongoose.model("users", UserSchema);
export default Users;
