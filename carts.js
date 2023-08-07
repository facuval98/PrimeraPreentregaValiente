const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const cartsRouter = express.Router();
cartsRouter.use(express.json());

// Ruta para crear un nuevo carrito
cartsRouter.post('/', (req, res) => {
  const cartId = uuidv4();
  const cart = {
    id: cartId,
    products: []
  };

  fs.readFile('./carrito.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo del carrito:', err);
      res.status(500).json({ error: 'Error al leer el archivo del carrito' });
    } else {
      const carts = JSON.parse(data);
      carts.push(cart);

      fs.writeFile('./carrito.json', JSON.stringify(carts, null, 2), (err) => {
        if (err) {
          console.error('Error al escribir en el archivo del carrito:', err);
          res.status(500).json({ error: 'Error al escribir en el archivo del carrito' });
        } else {
          res.json(cart);
        }
      });
    }
  });
});

// Ruta para obtener los productos de un carrito por id
cartsRouter.get('/:cid', (req, res) => {
  const cartId = req.params.cid;

  fs.readFile('./carrito.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo del carrito:', err);
      res.status(500).json({ error: 'Error al leer el archivo del carrito' });
    } else {
      const carts = JSON.parse(data);
      const cart = carts.find((c) => c.id.toString() === cartId.toString());

      if (cart) {
        res.json(cart.products);
      } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
      }
    }
  });
});

// Ruta para agregar un producto al carrito por id de carrito y id de producto
cartsRouter.post('/:cid/product/:pid', (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const { cantidad } = req.body;

  fs.readFile('./carrito.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo del carrito:', err);
      res.status(500).json({ error: 'Error al leer el archivo del carrito' });
    } else {
      const carts = JSON.parse(data);
      const cartIndex = carts.findIndex((c) => c.id.toString() === cartId.toString());

      if (cartIndex !== -1) {
        const cart = carts[cartIndex];
        const existingProductIndex = cart.products.findIndex((p) => p.product.toString() === productId.toString());

        if (existingProductIndex !== -1) {
          cart.products[existingProductIndex].cantidad += cantidad;
        } else {
          cart.products.push({ product: productId, cantidad });
        }

        fs.writeFile('./carrito.json', JSON.stringify(carts, null, 2), (err) => {
          if (err) {
            console.error('Error al escribir en el archivo del carrito:', err);
            res.status(500).json({ error: 'Error al escribir en el archivo del carrito' });
          } else {
            res.json(cart.products);
          }
        });
      } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
      }
    }
  });
});

module.exports = cartsRouter;