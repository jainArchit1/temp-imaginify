import mongoose, { Document, Schema, model, models, mongo } from "mongoose";

// clerkId , name ,email,userName,photo ,creditBalance ,PlanId

// export interface IUser extends Document {

//     clerkId: string;
//     username:string
//     email: string;
//     firstName: string;
//     lastName: string;
//     userName: string;
//     photo: string;
//     creditBalance: number;
//     planId:Number;

// }

const userSchema = new Schema({
  clerkId: {
    type: mongoose.Schema.Types.ObjectId, // object or string
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,

    unique: true,
  },
  photo: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  creditBalance: {
    type: Number,

    default: 10,
  },

  planId: {
    type: Number,
    default: 1,
  },
});

const User = models?.User || mongoose.model("User", userSchema);

export default User;
