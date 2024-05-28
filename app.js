const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let cobros = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/agregar_cobro', (req, res) => {
    const { nombre, monto, metodo_pago } = req.body;
    cobros.push({ nombre, monto, metodo_pago });
    res.redirect('/');
});

app.get('/cobros', (req, res) => {
    res.json(cobros);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
