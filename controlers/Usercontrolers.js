const User = require("../model/User.js");

const registration = async (req, res , next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body);
    console.log(username, email, password, confirmPassword);

    const isUser = await User.findOne({ username: username });
    if (isUser) {
      return res.json({ msg: "User already exists!", status: false });
    }

    const isemail = await User.findOne({ email: email });
    if (isemail) {
      return res.json({ msg: "Email already exists!", status: false });
    }

    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    res.json({
      status: 200,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username: username });
    if (!isUser) {
      return res.json({ msg: "Please create an account", status: false });
    }

    const isPassword = await User.findOne({ password: password });
    if (!isPassword) {
      return res.json({ msg: "Incorrect username or password", status: false });
    } else {
      res.json({
        status: true,
        email: isUser.email,
        username: isUser.username,
      });
    }
  } catch (error) {
    console.log(error);
    next();
  }
};


module.exports = {registration , login}