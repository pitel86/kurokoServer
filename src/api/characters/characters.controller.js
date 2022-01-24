const Character = require("./characters.model");
const { setError } = require('../../utils/errors/error');

const getAllCharacters = async (req, res, next) => {
  try {
    const characterDB = await Character.find();
    res.status(200).json(characterDB);
  } catch (error) {
    console.log(error);
    return next(setError(500, "Characters server errors"));
  }
};

const getCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterDB = await Character.findById(id)
    if (!characterDB) {
      return next(setError(404, "Character not found"));
    }
    return res.status(200).json(characterDB);
  } catch (error) {
    return next(setError(500, "Character fail"));
  }
};

module.exports = {
  getCharacter,
  getAllCharacters,
};
