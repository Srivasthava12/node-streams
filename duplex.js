const {Duplex} = require('stream')

const inoutStream = new Duplex({
    write(chuck, encoding, callback){
        console.log(chuck.toString());
        callback()
    },

    read(size){
        if(this.currentCharCode > 90){
            this.push(null)
            return
        }
        this.push(String.fromCharCode(this.currentCharCode++))
    }
})


inoutStream.currentCharCode = 65;

process.stdin.pipe(inoutStream).pipe(process.stdout)