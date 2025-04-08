//Requiring Figlet package
const figlet = require("figlet");

figlet("Figlet Working", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });