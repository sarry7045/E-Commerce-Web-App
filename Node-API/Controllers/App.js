const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Message from all Products" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "Message from Testing ALl Products" });
};

module.exports = { getAllProducts, getAllProductsTesting };
