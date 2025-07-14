const fs = require("fs");

// fs.writeFile("message.txt", "Hello World!", (err) => {
//   if (err) throw err;
//   console.log('successfully downloaded');
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});