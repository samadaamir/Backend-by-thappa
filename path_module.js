const path = require("path");
console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, "test", "hello.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const extname = path.extname(filePath);
const resolvedPath = path.resolve(filePath);
console.log({
    parseData,
    basename,
    dirname,
    extname,
    resolvedPath
});