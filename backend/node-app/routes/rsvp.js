const express = require("express");
const router = express.Router();
const flask = require("../services/flaskClient");

router.post("/rsvp", async (req, res) => {
   try {
       const response = await flask.post("/api/flask/rsvp", req.body);
       res.json(response.data);
       } catch (err) {
         console.error("Flask error:", err.message);
         res.status(500).json({error: "RSVP Failed"});
       }
});

module.exports = router;
