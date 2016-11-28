/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify({ displayName : 'Spaider' }))
});
server.listen('8080')