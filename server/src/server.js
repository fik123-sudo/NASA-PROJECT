const http = reqire('http');

const app = require('./app')
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server is on port ${PORT}`);
Console.log('hello');
});