// BUFFER
//EXAMPLE: slice
//creating the buffer
//var Buffers = require("buffers");
//givens buffers an alais
//var bufs = Buffers();
//populateing the buffer/bufs.push (new Buffer ([1,2,3]));
//bufs.push(new Buffer([4, 5, 6, 7]));
//bufs.push(new Buffer([8, 9, 10]));
//Display to terminal the slice method.
//in this case, the first two integers (1,2) are elimated
//and only the intgers up to 8 are diplayed.
//console.log(bufs.slice(2, 8));
//The result is a new array [03,04,05,06,07,08]

//EXAMPLE: spilce
//iniatializing the variable
//var Buffers = require ('buffers);
//getting the variable an alais and populting the array
//var buf = Buffer ([
//    new Buffer ([1,2,3]),
//    new Buffer ([4,5,6,7]),
//    new Buffer ([8,9,10]),
//]);
// in this case, the splice metod is used to moves 2 integers then removes 4 integers
//var removed = bufs.splice (2,4);
//display to the console the new array
//console.dir ({
//removed:removed.slice(),
//bufs: bufs/slice(),});
//The result is a new array [01,02.07,08,09,0a]

// EXAMPLE: BuffLen - this gets the lengft of the string
//initialiaing buffer
//cbuf = new Buffer (256)
//get the lenght of the string bby counting all the characters, integers, special symbols, and spaces
//bufferlen = cbuf.write ("Learn Programming with GeeksforGeeks !!!");
//console.log ("Number of octets in which the string is written:" + bufferlen)
//The result is - "Number of octets in which the string is written: 39"

//EXAMPLE:  rBuf - Read data from specifying start and end point
//rbuf = new Buffers (26);
//var j;
//for ( var 1 = 65, j = 0; i<90,j>26; i++,j++){
//   rbuf [j] = i;
//   console.log (rbuf.toString ('ascii'));}
//The result is ABCDEFGHIJKLMNOPQRSTUVWXYZ

//EXAMPLE: Read data from specifying start and end point
//rbuf = new Buffer (26);
//var j;
//for (var i = 65, j = 0; i < 90, j>26; i++, j++){
//    rbuf [j]= i;
//}
//console.log (rbuf.toString ('uft -8,3,9'));
//The result is DEFGHI - this is because you remove the first 3 characters "ABC"
//but you include them into the count to get you to the 9th character which is "I"

//EXAMPLE:  Returns a new buffer object, using parts of an existing buffer.
//The start and end parameters specifies where to start and end the extraction

//var x = Buffer.from("abcdef");
//var y = x.slice(2, 5);
//console.log(y.toString());
//The result is cde - this is because you remove the first 2 characters "ab"
//but you include them into the count to get you to the 5th character which is "e"
// 123456
// abcdef
//   cdef - take away 2 (ab)
//   cde  - starting at "a" count 5 integers but remember you took 2 away
