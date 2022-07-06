const pool = require("../util/database");

const getUsers = async () => {
  try {
    const res = await pool.query("SELECT * from usuario");
    return {
      succes: true,
      data: res.rows,
      error: null,
    };
  } catch (error) {
    return {
      succes: false,
      data: null,
      error: error,
    };
  }
};

exports.getUsers = getUsers;
