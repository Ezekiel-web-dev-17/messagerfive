import mongoose, { Schema } from "mongoose";

const messagesModel = new mongoose.Schema(
  {
    text: {
      type: String,
      mimLength: 1,
      required: true,
    },

    participants: {
      type: Array,
      required: true,
      minLength: 2,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messagesModel);

export default Message;
