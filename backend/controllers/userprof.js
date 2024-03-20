const { updateUserImage, getProfImageById } = require("../service/userprof");

const sendImageController = (req, res) => {
  const image = req.file.filename;
  // const { id } = req.params;
  const { id } = req.params;

  console.log(image);
  console.log(id);
  // Ensure that image and id are provided
  if (!image || !id) {
    return res.status(400).json({ error: "Missing image or user id" });
  }

  updateUserImage(id, image)
    .then(() => {
      res.json({ status: "Success" });
    })
    .catch((error) => {
      console.error("Error updating user image:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const getProfImageController = async (req, res) => {
  const { id } = req.params;

  try {
    // Get the image filename by modelNumber
    const filename = await getProfImageById(id);

    // Construct the path to the image file
    const imagePath = `public/images/${filename}`;

    // Send the image file as a response
    res.sendFile(imagePath, { root: "." });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "user image not found" });
  }
};

module.exports = {
  sendImageController,
  getProfImageController,
};
