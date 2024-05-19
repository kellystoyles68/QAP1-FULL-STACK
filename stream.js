//STREAM
//EXAMPLE:
//const myStream = get WritablesStreamSomehow();
//myStream.write ('some data');
//myStream.write ('some more data');
//myStreamEnd. ('done writing data');

//EXAMPLE:
//getReadableStreamSomehow()
//  .resume()
//  .on ('end', () => {
//  console.log ('Reached the end, but did not read anything.');
//})

//EXAMPLE:
//import {Readable} from 'node:stream';
//await Readable.from ([1,2,3,4]).drop(2).toArray();
//Answer is [3,4]
//you read the array and drop the first two integers [1,2] which changes the array to now be [3,4]
