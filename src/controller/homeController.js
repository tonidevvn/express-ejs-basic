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
  const [user] = await connectionPool
    .promise()
    .execute(`SELECT * FROM users WHERE id=?`, [uid]);
  console.log(">>> checking mysql2");
  console.log(user);
  return res.send(JSON.stringify(user));
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
  let uid = req.params.userId;
  console.log("uid request", uid);
  await connectionPool.promise().execute(`DELETE FROM users WHERE id=?`, [uid]);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getUserDetails,
  createNewUser,
  deleteUser,
};
