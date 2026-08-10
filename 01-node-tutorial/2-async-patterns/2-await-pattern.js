// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step), press enter to skip
//npm init -y (everrything default)

const { readFile, writeFile, write } = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenande.txt",
      `THIS IS AWESOME :${first} ${second}`,
      { flag: `a` },
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
