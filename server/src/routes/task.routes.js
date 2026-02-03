const router = require("express").Router();
const Task = require("../models/task.js");
const auth = require("../middlewares/auth.middleware.js");

router.use(auth);

router.post("/", async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id
  });
  res.json(task);
});

router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

router.delete("/:id", async (req, res) => {
  await Task.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.json({ message: "Deleted" });
});

module.exports = router;

