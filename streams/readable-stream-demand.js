const { Readable } = require("stream");

const readableStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currrentCharCode > 90) {
        this.push(null);
        return;
      }

      this.push(String.fromCharCode(this.currrentCharCode++));
    }, 100);
  },
});

readableStream.currrentCharCode = 65;
readableStream.pipe(process.stdout);
