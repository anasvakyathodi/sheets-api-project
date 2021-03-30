const router = require("express").Router();
const { getData } = require("./../functions/gs");

//routes
router.get("/", (req, res) => res.send("Server is running up!"));
router.get("/all", async (req, res) => {
  try {
    let data = await getData();
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const names = data.map((el) => el[0]).filter(unique);
    const semesters = data.map((el) => el[2]).filter(unique);
    const departments = data.map((el) => el[4]).filter(unique);
    const payload = {
      names,
      semesters,
      departments,
    };
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

router.get("/name/:name", async (req, res) => {
  try {
    const data = await getData();
    let newData = data.filter(
      (arr) => arr[0].toLowerCase() === req.params.name.toLowerCase()
    );
    newData = newData.map((arr) => ({
      name: arr[0],
      subject: arr[1],
      semester: arr[2],
      mark: arr[3],
      department: arr[4],
    }));
    return res.status(200).json(newData);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.get("/department/:dept", async (req, res) => {
  try {
    const data = await getData();
    let newData = data.filter(
      (arr) => arr[4].toLowerCase() === req.params.dept.toLowerCase()
    );
    newData = newData.map((arr) => ({
      name: arr[0],
      subject: arr[1],
      semester: arr[2],
      mark: arr[3],
      department: arr[4],
    }));
    return res.status(200).json(newData);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.get("/semester/:sem", async (req, res) => {
  try {
    const data = await getData();

    let newData = data.filter(
      (arr) => arr[2].toLowerCase() === req.params.sem.toLowerCase()
    );

    newData = newData.map((arr) => ({
      name: arr[0],
      subject: arr[1],
      semester: arr[2],
      mark: arr[3],
      department: arr[4],
    }));
    res.status(200).json(newData);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
