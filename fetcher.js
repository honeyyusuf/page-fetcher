
const request = require('request');
const fs = require('fs');
let val = process.argv.slice(2);
request(val[0],(error,response,body)=>{
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(val[1], body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length}  to ${val[1]}`);
    });
  }
});





