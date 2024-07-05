//Node js chapter1:
// How node js is different from vanilla js?

//1. Node js runs on server not in browser (backend not frontend)
//2. The console is the Terminal now
/*
console.log("Hello World");

function helloBro() {
    console.log("hello bro!");
}
helloBro();

function aplusb(a,b) {
    return a + b;
}
console.log(aplusb(3,5)); */
//3. Here we have golbal object instead of window object ==>> again window object is on browser
//console.log(global);
//4. Has common core module that we'll explore
//5. CommonJs modules instead of ES6 modules

//-----------------------------------------------------------------//
// how to import modules in node
//  here in node import ====>>> require();
/*
const os = require('os');
//console.log(os);
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
// also there are other values that are available 
console.log(__dirname);
console.log(__filename);
// we can also import other modules as well
const path = require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
// as we can see console.log(__dirname) and console.log(path.dirname(__filename)) are the same but path. comes in handy***
//we get all of these in a single method 
console.log(path.parse(__filename)); */

//--------------------------------------------------------------//
// we can create our own modules (custom modules)
// importing our own module
// because it is not a commonjs core module we can't just write 'math' we have to write './math' no need to write the extension****
const math = require('./math');
console.log(math.add(5,3));
console.log(math.subtract(5,3));
console.log(math.multiply(5,3));
console.log(math.divide(5,3)); 
//==================//






