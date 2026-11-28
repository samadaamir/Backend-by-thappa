//When we have to use any module in our code, we have to import it first.
//  In Node.js, we can use the require() function to import modules.
//  The os module provides operating system-related utility methods and properties.
const os = require("os");

// Get the os platform and user information
console.log("OS platform: ", os.platform());
console.log("Os user information: ", os.userInfo());

// Get the CPU architecture amd free memory
console.log("CPU architecture; ",os.arch());
console.log("Free memory: ", os.freemem(), "bytes");

//os module deal with the operating system and provides information about the 
// system's architecture, platform, user information, and memory usage. 
// It is a built-in module in Node.js, so we don't need to install it separately.

