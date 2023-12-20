// app.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Rutas
app.get('/', (req, res) => {
  res.render('home'); // Renderizar la vista home.handlebars
});

// Configurar WebSocket

io.on('connection', (socket) => {
    console.log('Usuario conectado');
  
    // Lógica de manejo de sockets para la actualización en tiempo real
    socket.on('addProduct', (data) => {
      // Lógica para agregar un producto
      // Puedes guardar el producto en una base de datos y luego emitir la actualización
      io.emit('updateProducts', { /* datos actualizados */ });
    });
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });
  
  // ...
  
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });


// Escuchar en un puerto específico
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// ...


  