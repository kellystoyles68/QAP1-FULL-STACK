// 0S - operating sytmen
var os = require("os");
console.log("platform:" + os.platform());
console.log("Architecture:" + os.arch());

//This code will print the path to the temporary directory used by your os.
//This method is  usefule for creating or managing temporary files or directories
//in a way that is compatible with the user'd os.

//load the OS modules
//const os = require("os");
//get the os temporary directory
const tempDirectory = os.tmpdir();
//print the path of the tempoerary directory
console.log("Temporary Directory:", tempDirectory);

//const os = require("os");
//sets the current processes priority to the lowessst (least favorable scheduling)
try {
  os.setPriority(os.constants.priority.PRIORITY_LOW);
  console.log("Current process priority set to low");
} catch (error) {
  console.log("Failed to set proirity for the current process", error);
}

//Example:
const pid = 1234;
try {
  os.setPriority(os.constants.priority.PRIORITY_LOW);
  console.log("Current process priority set to low");
} catch (error) {
  console.log("Failed to set proirity for the current process", error);
}
