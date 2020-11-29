import http from 'http';

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.end('Hello node...');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
})