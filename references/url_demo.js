const url = require('url');

const myUrl = new URL("http://xyz.com/hello.html?id=1if131&status=active");
//Serialized Url
 console.log(myUrl.href);
 console.log(myUrl.toString());
 console.log(myUrl.host);
 console.log(myUrl.search);
 console.log(myUrl.searchParams);
 //Loop through params
 myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
