const express = require("express");
const members = require("./../../data/memers");
const uuid = require("uuid");
const router = express.Router();

/**
 * Get Members
 */
router.get("/", (req, res) => {
  res.json(members);
});

/**
 * Get Memeber
 */
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No Member With ID: ${req.params.id}` });
  }
});

/**
 * Create Members
 */
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
  };

  if (!newMember.name || !newMember.age) {
    return res.status(400).json({ msg: "Please Include Name/Email" });
  }

  members.push(newMember);

  if (req.body.back) {
    backURL = req.header("Referer") || "/";
    // do your thang
    return res.redirect(backURL);
  }
  res.json(members);
});

/**
 * Update Memeber
 */
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name || member.name;
        member.age = updateMember.age || member.age;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No Member With ID: ${req.params.id}` });
  }
});

/**
 * Delete Memeber
 */
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No Member With ID: ${req.params.id}` });
  }
});

module.exports = router;
