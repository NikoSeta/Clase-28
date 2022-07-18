const http = require('http');
const server = http.createServer();
const { fork } = require('child_process');

//Proceso NO Bloqueante
server.on('request', (req, res) => {
    let { url } = req;

    if(url == '/calcular') {
        const computo = fork('./computo.js')
        computo.send('start');
        computo.on('message', sum => {
            res.end(`La suma es ${sum}`)
        })
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
})