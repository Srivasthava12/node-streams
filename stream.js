const fs = require('fs');

const file = fs.createWriteStream('./big.file');

for(let i=0; i< 1e6 ; i++){
    file.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum exercitationem facilis ipsa minus velit, nobis consequuntur quasi maxime at recusandae quas, vitae similique repellat dolorem modi maiores quaerat culpa!')
}

file.end();