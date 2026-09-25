const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());
// app.use(express.json());

// Enrutamiento a microservicios
app.use('/api/usuarios', proxy('http://localhost:8081'));
app.use('/api/inventario', proxy('http://localhost:8082'));
app.use('/api/compras', proxy('http://localhost:8083'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`API Gateway ejecutándose en el puerto ${PORT}`);
});
