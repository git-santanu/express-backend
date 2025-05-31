const User = require("../../models/users");

const GetUserDetails = async (req, res) => {
  try {
    const getUSer = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "password"],
      },
      raw: true,
    });
    if (!getUSer) return res.status(400).json({ error: "User not found!" });
    return res
      .status(200)
      .json({ message: `Welcome ${getUSer.name}!`, user: getUSer });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

module.exports = {
  GetUserDetails,
};
