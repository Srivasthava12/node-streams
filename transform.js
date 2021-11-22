const { Transform, Duplex } = require('stream');

//Example 1
// const upperCase = new Transform({
//     transform(chuck, encoding, callback){
//         this.push(chuck.toString().toUpperCase());
//         callback()
//     }
// })

// process.stdin.pipe(upperCase).pipe(process.stdout)

//Example 2

const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const crypto = require('crypto');

const progress = new Transform({
    transform(chuck, encoding, callback) {
        process.stdout.write('-')
        callback(null, chuck)
    }
})

//zip the file with secrete
fs.createReadStream(file).pipe(zlib.createGzip()).pipe(crypto.createCipher('aes192', 'secret_key')).pipe(progress).pipe(fs.createWriteStream(file + '.zz')).on('finish', () => console.log("Done"))


//to unzip with secret

// fs.createReadStream(file+'.zz').pipe(crypto.createDecipher('aes192', 'secret_key')).pipe(zlib.createGunzip()).pipe(progress).pipe(fs.createWriteStream(file.slice(0,-3))).on('finish', () => console.log("Done"))