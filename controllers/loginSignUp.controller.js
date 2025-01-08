import loginSignUp from "../models/loginSignUp.js";
const newUser = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    email,
    mobileNumber,
    password,
    confirmPassword,
  } = req.body;
  try {
    const userOccupied = await loginSignUp.findOne({
      $or: [
        { username: username },
        { email: email },
        { mobileNumber: mobileNumber },
      ],
    });
    if (userOccupied) {
      return res.send("user already exists");
    }
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !mobileNumber ||
      !password ||
      !confirmPassword
    ) {
      return res.send("enter all the details");
    }
    if (password !== confirmPassword) return res.send("re enter the password");
    const newUser = new loginSignUp({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send("error");
  }
};
const login = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    if ((username || email) && !password) {
      return res.send("enter all the details");
    }

    const user = await loginSignUp.findOne({
      $or: [
        { username: username, password: password },
        { email: email, password: password },
      ],
    });

    if (user) {
      res.send("login successful:    "+user.username);
    } else {
      res.send("login failed");
    }
  } catch (error) {
    res.send("error");
  }
};
const forgotPassword = async (req, res) => {};
export { newUser, login, forgotPassword };
