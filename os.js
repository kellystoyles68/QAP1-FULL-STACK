// 0S - operating sytmen
var os = require("os");

//This code will print the name of the operating system your node.js is running on.
console.log("platform:" + os.platform());
console.log("Architecture:" + os.arch());

//This code will print the path to the temporary directory used by your os.
//This method is  usefule for creating or managing temporary files or directories
//in a way that is compatible with the user'd os.
const tempDirectory = os.tmpdir();
//print the path of the tempoerary directory
console.log("Temporary Directory:", tempDirectory);

//sets the current processes priority to the lowessst (least favorable scheduling)
try {
  os.setPriority(os.constants.priority.PRIORITY_LOW);
  console.log("Current process priority set to low");
} catch (error) {
  console.log("Failed to set proirity for the current process", error);
}

//Example of an error
const pid = 1234;
try {
  os.setPriority(os.constants.priority.PRIORITY_LOW);
  console.log("Current process priority set to low");
} catch (error) {
  console.log("Failed to set proirity for the current process", error);
}

// Here are some EXAMPLEs of what you can learn using the OS node
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
console.log("OS release:", os.release());
console.log("User Info:", os.userInfo());
console.log("OS Version:", os.version());
