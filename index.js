const fs = require('fs');

const server = require('http').createServer()


server.on('request', (req, res) => {
    // inEfficient way to send data the cup jumps to ~ 300mb
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end(data)
    // })

    //Better option 
    const src = fs.createReadStream('./big.file');
    src.pipe(res)
})

server.listen(4000)