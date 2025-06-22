import mongoose, { Schema } from "mongoose";
// import react from "../../client/public/vite.svg";

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

    // chatName: {
    //   type: String,
    //   minLength: 2,
    // },

    // lastMessage: {
    //   type: String,
    // },

    // avatarUrl: {
    //   type: String,
    //   default: react,
    // },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messagesModel);

export default Message;
