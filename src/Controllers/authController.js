/** @format */

const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
exports.signup = (req, res) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    password_confirmation,
    university,
    speciality,
    term,
    degreeOfStudy,
    city,
    description,
    selectedFiles,
  } = req.body;
  const degree = [
    "licencjackie",
    "inżynierskie",
    "magisterskie",
    "doktoranckie",
    "lekarskie",
  ];
  const errors = [];
  if (!username) {
    errors.push({ username: "required" });
  }
  if (!firstName) {
    errors.push({ firstName: "required" });
  }
  if (!lastName) {
    errors.push({ lastName: "required" });
  }
  if (!university) {
    errors.push({ university: "required" });
  }
  if (!speciality) {
    errors.push({ speciality: "required" });
  }
  if (!degreeOfStudy) {
    errors.push({ degreeOfStudy: "required" });
  }
  if (degree.indexOf(degreeOfStudy) === -1) {
    errors.push({
      degreeOfStudy:
        "you need to choose between licencjackie, " +
        "inżynierskie, magisterskie, doktoranckie or lekarskie ",
    });
  }
  if (!term) {
    errors.push({ term: "required" });
  }
  if (term > 10) {
    errors.push({ term: "term cannot be bigger than 10" });
  }

  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          university: university,
          speciality: speciality,
          degreeOfStudy: degreeOfStudy,
          term: term,
          city: city,
          description: description,
          selectedFiles: selectedFiles,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then(() => {
                res.status(200).json({ user });
              })
              .catch((err) =>
                res.status(500).json({ errors: [{ error: err }] })
              );
          });
        });
      }
    })
    .catch((err) => res.status(500).json({ errors: [{ error: err }] }));
};
exports.signin = (req, res) => {
  const { email, password } = req.body;
  const errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ errors: [{ user: "not found" }] });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res
                .status(400)
                .json({ errors: [{ password: "incorrect" }] });
            } else {
              return res.status(200).json({ message: user });
            }
            //    const access_token = createJWT(user.email, user._id, 3600);
            //    jwt.verify(
            //      access_token,
            //      process.env.TOKEN_SECRET,
            //      (err, decoded) => {
            //        if (err) {
            //          res.status(500).json({ errors: err });
            //        }
            //        if (decoded) {
            //          return res.status(200).json({
            //            success: true,
            //            token: access_token,
            //            message: user,
            //          });
            //        }
            //      }
            //    );
          })
          .catch((err) => {
            res.status(500).json({ errors: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
};
