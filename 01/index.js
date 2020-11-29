const http = require('http');
const PORT = 4000;

const server = http.createServer((req, res) => {
    res.end('Hello world from Zachy');
});

server.listen(PORT, () => {
    console.log(`Server started at port ${ PORT }`);
})