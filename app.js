const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Rutas de productos (ya definidas en el código anterior)

// Importar y usar las rutas de carritos
const cartsRouter = require('./carts');
app.use('/api/carts', cartsRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});