const path = require("path");
//It tells you what character your operating system uses to separate folders.
console.log(path.sep);

//combines path segments and cleans up extra slashes.
const filePath = path.join("/content//", "///subfolder/////", "///test.txt///");
console.log(filePath);

//returns the last part of the path.
const base = path.basename(filePath);
console.log(base);

//creates an absolute path.
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
