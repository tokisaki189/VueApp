const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const con = require("./connect");
app.use(express.static("server"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

con.connect(function (err) {
  console.log("Connected");
});

app.listen(3000, function () {
  console.log("Server is running on localhost:3000");
});

app.get("/notes", (req, res) => {
  con.query("SELECT * FROM notes", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/addnote", (req, res) => {
  let newItem = req.body;
  console.log("new:" + newItem.title + " " + newItem.content);
  let title = newItem.title;
  let content = newItem.content;
  con.connect(function () {
    var sql =
      "INSERT INTO `notes`(title, content) VALUES ('" +
      title +
      "', '" +
      content +
      "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
});
app.delete("/deletenote/:id", (req, res) => {
  let id = req.params.id;
  con.connect(function () {
    var sql = `DELETE FROM notes WHERE id='${id}';`;
    con.qtuery(sql, function (err, result) {
      if (err) throw err;
    });
  });
});
app.put("/editnote/:id", (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  let id = req.params.id;
  var query = "UPDATE notes SET title=?, content=? WHERE id=?";
  console.log(title + content + id);
  con.connect(function () {
    con.query(query, [title, content, id], (err, results, fields) => {
      if (err) throw err;
    });
  });
});
/* 
app.get("/edit/:id", function (req, res) {
    con.query(`SELECT * FROM notes WHERE id='${req.params.id}';`, function (err, notes, fields) {
        if (err) throw err;
        result = notes;
        res.render("edit", { result })
        console.log(result[0]);
    })

})
app.get("/delete-note", function (req, res) {
    con.query(`DELETE FROM notes;`, function (err, result) {
        if (err) throw err;
    });
});
app.get("/trash/:id", function (req, res) {
    con.query(`DELETE FROM notes WHERE id='${req.params.id}';`, function (err, result) {
        if (err) throw err;
        console.log("deleted-one");
    })
})
app.post('/', function (req, res) {
    var title = req.body.title
    var content = req.body.content
    con.connect(function () {
        var sql = "INSERT INTO `notes`(title, content) VALUES ('" + title + "', '" + content + "')"
        con.query(sql, function (err, result) {
            if (err) throw err
        })
    })
})
app.post("/edit/:id", function (req, res) {
    con.connect(function () {
        var sql = `UPDATE notes SET title='${req.body.title}', content='${req.body.content}' WHERE id='${req.params.id}';`
        con.query(sql, function (err, result) {
            if (err) throw err
            res.redirect("/")
        })
    })
})


app.get("/detail/:id", function (req, res) {
    con.query(`SELECT * FROM notes WHERE id='${req.params.id}';`, function (err, notes, fields) {
        if (err) throw err;
        result = notes;
        res.render("detail", { result })
    })

}) */
