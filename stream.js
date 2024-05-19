//STREAM
//EXAMPLE:
// returns a writable stream

const { Writable } = require("stream");

//function to get the stream write to the termina;
function getWritablesStreamSomehow() {
  return new Writable({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    },
  });
}
//initializing the stream
const myStream = getWritablesStreamSomehow();
//writing data to stream
myStream.write("some data");
myStream.write("some more data");
//ending it to the stream
myStream.end("done writing data");

//EXAMPLE:
const { Readable } = require("stream");

//function to display to terminal
function getReadableStreamSomehow() {
  return new Readable({
    read() {
      this.push("a whole lotta data");
      this.push("a shitload of data");
      this.push(null);
      console.log(getReadableStreamSomehow());
    },
  });
}
const readableStream = getReadableStreamSomehow();
// reading data from the screen
readableStream.on("data", (chunk) => {
  //display to the termina;
  console.log(chunk.toString());
});

// finished reading
readableStream.on("end", () => {
  console.log("Finished reading data.");
});

// handling errors
readableStream.on("error", (err) => {
  console.error("Error while reading from the stream:", err);
});
