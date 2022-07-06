const userModel = require("../models/user");

require("dotenv").config({ path: "./util/.env" });

const login = async (req, res) => {
  const { email, password } = req.body;
  const key = req.headers["x-api-key"];

  try {
    if (key !== process.env.APIKEY) {
      throw new Error("Invalid credentials");
    }

    const query = await userModel.getUsers();
    const user = query.data.find((e) => {
      if (e.email === email && e.password === password) {
        return e;
      }
    });

    res.status(200).json({
      email: user.email,
      rut: user.rut,
      name: user.name,
      paternallastname: user.paternallastname,
      maternallastname: user.maternallastname,
    });
  } catch (error) {
    res.status(401).json({
      server_error: error.message,
    });
  }
};

exports.login = login;
