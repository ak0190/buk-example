// jshint esversion: 6

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/ecs-image", function (req, res) {
  res.sendFile(__dirname + "/amazon-ecs.jpg");
});

app.post("/", function (req, res) {
  num1 = Number(req.body.num1);
  num2 = Number(req.body["num2"]);
  switch (req.body.operator) {
    case "+":
      operator = add;
      break;
    case "x":
      operator = multiply;
      break;
    case "-":
      operator = subtract;
      break;
    case "/":
      operator = divide;
      break;
  }
  console.log(calculate(num1, num2, operator));
  res.send(`
    <h2>
     That was easy, your result is: ${calculate(num1, num2, operator)}
    </h2>
    <img src="/ecs-image" alt="ECS-Icon"class="center" width="10%" style="vertical-align:middle;margin:0px 100px">
    <p>
    By the way I'm running on a ECS instance
    </p>
    <p><a href="/">Back to main index page...</a></p>
  `);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculate(num1, num2, operator) {
  return operator(num1, num2);
}

