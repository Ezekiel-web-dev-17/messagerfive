import mongoose from "mongoose";
import Message from "../models/message.model.js";

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

export const createMessages = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { text, participants } = req.body;
    const message = await Message.create({
      text,
      participants,
    });

    session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: message,
    });
  } catch (e) {
    await session.abortTransaction();
    session.endSession();
    next(e);
  }
};

export const editMessage = async (req, res, next) => {
  try {
    const editedMessage = await Message.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { ...req.body }
    );

    res.status(201).json({
      success: true,
      message: "Message edited successfully",
      data: editedMessage,
      updatedDatum: { ...req.body },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const userMessage = await Message.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      message: "Message deleted successfully",
      messageId: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};
