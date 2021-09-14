const { Duplex } = require("stream");

const duplexStream = new Duplex({
  read(size) {
    if (this.currrentCharCode > 90) {
      this.push(null);
      return;
    }
    this.push(String.fromCharCode(this.currrentCharCode++));
  },
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

duplexStream.currrentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);
