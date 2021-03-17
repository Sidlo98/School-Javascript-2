const path = require('path');

// console.log(__filename)

// console.log(path);
// console.log(path.basename(__filename));  // basename ger oss bara filnamnet på den aktuella filen vi kör
// console.log(path.dirname(__filename))  // ger oss samma som __dirname
// console.log(path.extname(__filename));  // extname ger oss filtypen 

console.log(path.join(__dirname, 'mapp', 'index.html'));
