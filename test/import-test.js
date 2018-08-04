/*
* Create by Elad Hartsak on 3/8/2018
*/

const gtfs = require('../');
const http = require('http');
const mongoose = require('mongoose');
const server = http.createServer(function(req,res){
    res.end('Hello World!\n');
});


const config = {
    mongoUrl: "mongodb://localhost:27017/gtfs-test",
    agencies:[
        {
            agency_key:'mot',
            url:'ftp://199.203.58.18/israel-public-transportation.zip',
        }
    ]
};
async function main() {
    try {
        await mongoose.connect(config.mongoUrl);
        await gtfs.import(config);
    } catch (e) {
        console.error(e);
    }
}

server.listen(3000,function(){
    main();
});