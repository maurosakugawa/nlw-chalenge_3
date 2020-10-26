
// Importar dependências
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Iniciando servidor
const server = express();
server
// Utilizar body do req
.use(express.urlencoded({ extended: true }))
// Utilizando os arquivos estáticos
.use(express.static('public'))
// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//criando rotas
/*
server.get('/', (req, res) => {
   // return res.sendFile(path.join(__dirname, 'views', 'index.html')); /* Jeito sem o template engine */ 
  /* return res.render('index')
}); */
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/createOrphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500);
