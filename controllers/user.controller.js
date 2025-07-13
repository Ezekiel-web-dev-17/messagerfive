import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const user = await User.find().select("-password");

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getMultipleUsers = async (req, res, next) => {
  try {
    const { userIds } = req.body;
    console.log("userIds:", userIds);
    if (!userIds || !Array.isArray(userIds)) {
      const error = new Error("Invalid user IDs");
      error.statusCode = 400;
      throw error;
    }
    const users = await User.find({ _id: { $in: userIds } }).select(
      "-password"
    );
    if (users.length === 0) {
      const error = new Error("No users found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
