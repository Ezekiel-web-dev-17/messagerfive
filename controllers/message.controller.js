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

export const getUserMessages = async (req, res, next) => {
  try {
    if (req.user.id != req.params.id) {
      const err = new Error("you are not the owner of this account");
      err.status = 401;
      throw err;
    }

    const userMessages = await Message.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      data: userMessages,
    });
  } catch (error) {
    next(error);
  }
};

export const createMessages = async (req, res, next) => {
  try {
    const message = await Message.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (e) {
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

export const deleteMesage = async (req, res, next) => {
  try {
    const userMessage = await Message.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      message: "Message deleted successfully",
      userId: req.user.id,
      messageId: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};
