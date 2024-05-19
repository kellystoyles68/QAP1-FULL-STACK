// BUFFER
//EXAMPLE: slice
//creating the buffer
var Buffers = require("buffers");
//givens buffers an alais
var bufs = Buffers();
//populateing the buffer
bufs.push(new Buffer([1, 2, 3]));
bufs.push(new Buffer([4, 5, 6, 7]));
bufs.push(new Buffer([8, 9, 10]));
//Display to terminal the slice method.
//in this case, the first two integers (1,2) are elimated
//and only the intgers up to 8 are diplayed.
console.log(bufs.slice(2, 8));
//The result is a new array [03,04,05,06,07,08]

//EXAMPLE: spilce
//iniatializing the variable
var buf1 = Buffer.from([1, 2, 3]);
var buf2 = Buffer.from([4, 5, 6, 7]);
var buf3 = Buffer.from([8, 9, 10]);

// Join all buffers together and display
var totalBuffer = Buffer.concat([buf1, buf2, buf3]);
console.log(totalBuffer);
//in this case, the first two integers (1,2) are elimated
//and only the intgers up to 8 are diplayed.
//display to the console
var slicedBuffer = totalBuffer.slice(2, 8);
console.log(slicedBuffer);
// The result is a new array [03,04,05,06,07,08]

// EXAMPLE: BuffLen - this gets the lengft of the string
//initialiaing buffer
var cbuf = new Buffer(256);
//get the lenght of the string bby counting all the characters, integers, special symbols, and spaces
bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
console.log("Number of octets in which the string is written:" + bufferlen);
//The result is - "Number of octets in which the string is written: 39"

//EXAMPLE:  rBuf - Read data from specifying start and end point
var rbuf = Buffer.alloc(26);
//
for (let i = 65, j = 0; i < 91 && j < 26; i++, j++) {
  rbuf[j] = i;
}
console.log(rbuf.toString("ascii"));
//The result is ABCDEFGHIJKLMNOPQRSTUVWXYZ

//EXAMPLE: Read data from specifying start and end point
var rbuf = Buffer.alloc(26);
for (let i = 65, j = 0; i < 91 && j < 26; i++, j++) {
  rbuf[j] = i;
}
// Correctly using the toString method
console.log(rbuf.toString("utf-8", 3, 9));
//The result is DEFGHI - this is because you remove the first 3 characters "ABC"
//but you include them into the count to get you to the 9th character which is "I"

//EXAMPLE:  Returns a new buffer object, using parts of an existing buffer.
//The start and end parameters specifies where to start and end the extraction

var x = Buffer.from("abcdef");
var y = x.slice(2, 5);
console.log(y.toString());
//The result is cde - this is because you remove the first 2 characters "ab"
//but you include them into the count to get you to the 5th character which is "e"
// 123456
// abcdef
//   cdef - take away 2 (ab)
//   cde  - starting at "a" count 5 integers but remember you took 2 away
