const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Kanye West el mejor artista vivo');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});