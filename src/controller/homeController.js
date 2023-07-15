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
  return res.render("index.ejs", { dataUser: user });
};

module.exports = {
  getHomePage,
  getUserDetails,
};
