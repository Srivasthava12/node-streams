const { Writable } = require('stream');

const outStream = new Writable({
    write: (chuck, encoding, callback) => {
        console.log('object :>> ', chuck.toString());
        callback()
    }
})

process.stdin.pipe(outStream)