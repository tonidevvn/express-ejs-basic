import connectionPool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
  const [users] = await connectionPool.promise().execute("SELECT * FROM users");
  return res.status(200).json({ message: "OK", data: users });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({ message: "Missing required field(s)" });
  } else {
    await connectionPool
      .promise()
      .execute(
        `INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?);`,
        [firstName, lastName, email, address]
      );
    return res.status(200).json({ message: "OK" });
  }
};

let deleteUser = async (req, res) => {
  let uid = req.params.uid;
  console.log("delete User with id", uid);
  if (!uid) {
    return res.status(200).json({ message: "Missing required field(s)" });
  } else {
    let [user] = await connectionPool
      .promise()
      .execute(`SELECT * FROM users WHERE id=?`, [uid]);
    if (!user[0]) {
      return res.status(200).json({ message: "The query user does not exist" });
    } else {
      await connectionPool
        .promise()
        .execute(`DELETE FROM users WHERE id=?`, [uid]);
      return res.status(200).json({ message: "OK" });
    }
  }
};

let getUserInfo = async (req, res) => {
  let uid = req.params.uid;
  console.log("get User info with id", uid);
  if (!uid) {
    return res.status(200).json({ message: "Missing required field(s)" });
  } else {
    let [user] = await connectionPool
      .promise()
      .execute(`SELECT * FROM users WHERE id=?`, [uid]);
    return res.status(200).json({ message: "OK", data: user[0] });
  }
};

let updateUser = async (req, res) => {
  let { uid, firstName, lastName, email, address } = req.body;
  if (!uid || !firstName || !lastName || !email || !address) {
    return res.status(200).json({ message: "Missing required field(s)" });
  } else {
    let [user] = await connectionPool
      .promise()
      .execute(`SELECT * FROM users WHERE id=?`, [uid]);
    if (!user[0]) {
      return res.status(200).json({ message: "The query user does not exist" });
    } else {
      await connectionPool
        .promise()
        .execute(
          `UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?`,
          [firstName, lastName, email, address, uid]
        );
      return res.status(200).json({ message: "OK" });
    }
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  getUserInfo,
};
