const http = require('http');
const server = http.createServer();

//Proceso Bloqueante
server.on('request', (req, res) => {
    let { url } = req;

    if(url == '/api/randoms') {
        const sum = calculo();
        res.end(`La suma es ${sum}`)
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
});