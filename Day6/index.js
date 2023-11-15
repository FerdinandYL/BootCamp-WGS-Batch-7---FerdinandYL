const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname == '/home' || pathname == '/') {
        fs.readFile('./home.html', 'utf-8', (err, data)=>{
            if(err){
                console.error(`Error reading ${filename}: ${err.message}`);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (pathname == '/about') {
        fs.readFile('./about.html', 'utf-8', (err, data)=>{
            if(err){
                console.error(`Error reading ${filename}: ${err.message}`);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (pathname == '/content') {
        fs.readFile('./content.html', 'utf-8', (err, data)=>{
            if(err){
                console.error(`Error reading ${filename}: ${err.message}`);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Not found');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});