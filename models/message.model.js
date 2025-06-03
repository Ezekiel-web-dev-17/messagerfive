import mongoose, { Schema } from "mongoose";

const messagesModel = new mongoose.Schema(
  {
    text: {
      type: String,
      mimLength: 1,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messagesModel);

export default Message;
