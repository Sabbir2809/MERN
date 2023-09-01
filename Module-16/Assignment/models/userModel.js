const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    secondName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: {
      type: String,
      required: true,
      minLength: [4, "Password should contain at least 4 characters"],
    },
    address: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// middleware
// userSchema.pre("remove", async (next) => {
//   await CartItems.deleteMany({ user: user._id });
//   await Orders.deleteMany({ user: user._id });
//   next();
// });

// model
const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
