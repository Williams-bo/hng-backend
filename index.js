const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "williamssunday170@gmail.com",
    pass: "etok1779",
  },
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/contact", function (req, res) {
  const message = req.body.message;
  const subject = req.body.subject;
  const useremail = req.body.useremail;

  let mailOptions = {
    from: "williamssunday170@gmail.com",
    to: useremail,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.send("Got a request");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
