const express = require('express');
const app = express();
const PORT = process.argv[3] || 8080;
const { fork } = require('child_process');
const { infoNode } = require('./src/models/index')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + "/public"));


app.get('/info', (req, res)=>{
    res.render('index', {infoNode: infoNode})
});

app.get('/', (req, res)=>{

});


app.listen(PORT, () => {
    
});

const server = app.listen(PORT, () => {
    console.log(`Ir a la página http://localhost:${PORT}/info`);
});
server.on('error', error => console.log(`Error en el servidor ${error}`))