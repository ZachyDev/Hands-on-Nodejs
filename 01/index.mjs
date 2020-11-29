import { createServer } from 'http';
const PORT = 4000;

const server = createServer((req, res) => {
    res.end('<h1>Hello</h1>')
});

server.listen(PORT, () => {
    console.log(`Server started at port ${ PORT }`);
})