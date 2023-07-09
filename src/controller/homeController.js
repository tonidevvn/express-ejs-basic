import connection from "../configs/connectDB";
let getHomePage = (req, res) => {
  let data = [];
  // logic
  // execute will internally call prepare and query
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(">>> checking mysql2");
    console.log(results); // results contains rows returned by server
    data = results.map((row) => {
      return row;
    });
    return res.render("index.ejs", { dataUser: data });
  });
};

module.exports = {
  getHomePage,
};
