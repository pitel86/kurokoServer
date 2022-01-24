const Team = require("./teams.model");
const { setError } = require('../../utils/errors/error');

const getAllTeams = async (req, res, next) => {
  try {
    const teamDB = await Team.find();
    res.status(200).json(teamDB);
  } catch (error) {
    console.log(error);
    return next(setError(500, "Teams server errors"));
  }
};

const getTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teamDB = await Team.findById(id)
    if (!teamDB) {
      return next(setError(404, "Team not found"));
    }
    return res.status(200).json(teamDB);
  } catch (error) {
    return next(setError(500, "Team fail"));
  }
};

module.exports = {
  getTeam,
  getAllTeams,
};
