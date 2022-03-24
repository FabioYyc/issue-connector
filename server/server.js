const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/issue", (req, res) => {
  try {
    controller.create(req.body);
    res.json(req.body);
  } catch (error) {
    console.error("Cannot create issue");
    res.status(500)
  }
});

app.get("/issue", (req, res) => {
  try {
    const issue = controller.read();
    res.json(issue);
  } catch (error) {
    console.error("Cannot read issue");
    res.status(500)
  }
});
app.put("/issue", (req, res) => {
  try {
    const newIssue = req.body;
    controller.update(newIssue);
    res.json({message: `updated issue with id ${newIssue.id}`});
  } catch (error) {
    console.error("Cannot update issue");
    res.status(500)
  }
});
app.delete("/issue", (req, res) => {
  try {
    const issueToDelete = req.body;
    controller.delete(issueToDelete);
    res.json({message: `deleted issue with id ${issueToDelete.id}`});
  } catch (error) {
    console.error("Cannot delete issue");
    res.status(500)
  }
});
