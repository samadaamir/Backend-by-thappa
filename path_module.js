const path = require("path");
console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, "test", "hello.txt");
console.log(filePath);