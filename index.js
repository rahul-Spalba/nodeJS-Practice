// // import PersonClass from './PersonClass'
// const person = require('./person');
// const PersonClass = require('./PersonClass');
// const person1 = new PersonClass('Bhagat','bengalore');
// console.log('from person method',person.name);
// console.log('from person class',person1.address);
// person1.sayHi();

// const Logger = require('./logger');
// const logger =  new Logger();
// logger.on('message',(data)=>console.log('Called Listener',data));

// logger.log('GoodMorning');

const http = require('http');
const path = require('path');
const fileSystem = require('fs');
// const { profile } = require('console');

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>HomeIndia</h1>');
    }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
