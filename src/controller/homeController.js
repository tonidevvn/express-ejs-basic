import connectionPool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  const [users] = await connectionPool.promise().execute("SELECT * FROM users");
  console.log(">>> checking mysql2");
  console.log(users);
  return res.render("index.ejs", { dataUser: users });
};

let getUserDetails = async (req, res) => {
  let uid = req.params.userId;
  console.log("uid request", uid);
  let [user] = await connectionPool
    .promise()
    .execute(`SELECT * FROM users WHERE id=?`, [uid]);
  console.log(">>> checking mysql2");
  console.log(user[0]);
  return res.render("view.ejs", { dataUser: user[0] });
};

let createNewUser = async (req, res) => {
  console.log(req.body);
  let { firstName, lastName, email, address } = req.body;
  await connectionPool
    .promise()
    .execute(
      `INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?);`,
      [firstName, lastName, email, address]
    );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let { userId } = req.body;
  console.log("uid request", userId);
  await connectionPool
    .promise()
    .execute(`DELETE FROM users WHERE id=?`, [userId]);
  return res.redirect("/");
};

let editUserDetails = async (req, res) => {
  let uid = req.params.userId;
  console.log("uid request", uid);
  let [user] = await connectionPool
    .promise()
    .execute(`SELECT * FROM users WHERE id=?`, [uid]);
  return res.render("update.ejs", { dataUser: user[0] });
};

let updateUser = async (req, res) => {
  let { userId, firstName, lastName, email, address } = req.body;
  await connectionPool
    .promise()
    .execute(
      `UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?`,
      [firstName, lastName, email, address, userId]
    );
  return res.redirect("/");
};

let getUploadPage = async (req, res) => {
  return res.render("upload.ejs");
};

let handleFileUpload = (req, res) => {
  // req.file contains information of uploaded file
  // req.body contains information of text fields, if there were any
  console.log("file name upload", req.file, req.body);

  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.file) {
    return res.send("Please select an image to upload");
  }

  // Display uploaded image for user validation
  res.send(
    `You have uploaded this image: <hr/><img src="/static/${req.file.filename}" width="500"><hr /><a href="./upload">Upload another image</a>`
  );
};

let handleMultiFilesUpload = (req, res) => {
  // req.files contains information of uploaded file
  // req.body contains information of text fields, if there were any
  const files = req.files;
  console.log("files upload ", files, files.length);

  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.files || !req.files.length) {
    return res.send("Please select at least one image to upload");
  }

  let index, len;
  let result = `You have uploaded these images (${files.length}): <hr />`;

  // Loop through all the uploaded images and display them on frontend
  for (index = 0, len = files.length; index < len; ++index) {
    result += `<img src="/static/${files[index].filename}" width="300" style="margin-right: 20px;">`;
  }
  result += '<hr/><a href="./upload">Upload more images</a>';
  res.send(result);
};

module.exports = {
  getHomePage,
  getUserDetails,
  createNewUser,
  deleteUser,
  editUserDetails,
  updateUser,
  getUploadPage,
  handleFileUpload,
  handleMultiFilesUpload,
};
