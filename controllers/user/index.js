const User = require("../../models/users");
const UserImages = require("../../models/user-images")

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

const UploadFiles = async(req, res) => {
  try {
    const files = req.files;
    if (files.length === 0 || !files) {
      return res.status(403).json({error: "No files selected" });
    }
    const fileRecords = files.map(file => ({
      user_id: req.user.id,
      file_name: file.filename,
      original_file_name: file.originalname,
      file_path: file.path
    }))
    await UserImages.bulkCreate(fileRecords)
    return res.status(201).json({message: 'Files uploaded sucessfully'})
  } catch (error) {
    console.log('something went wrong', error)
    res.status(500).json({message: 'Internal server error'})
  }
}

const getUserFiles = async(req, res) => {
  try {
    const checkUserDataExist = await UserImages.findOne({
      where: {
        user_id: req.user.id,
        deletedAt: null
      },
      attributes:{exclude: ["createdAt", "deletedAt", "updatedAt"]},
      raw: true
    })
    if (!checkUserDataExist) return res.status(401).json({message: 'Record not found!'})
      const response = await User.findOne({
        where: {
          id: req.user.id
        },
        attributes: ['id', 'name'],
        include: [{
          model: UserImages,
          attributes: {exclude:['updatedAt', 'deletedAt']}
        }]
      })
      return res.status(200).json({message: 'Files fetched successfully', response})
  } catch (error) {
    console.log('something went wrong')
    res.status
  }
}

module.exports = {
  GetUserDetails,
  UploadFiles,
  getUserFiles
};
