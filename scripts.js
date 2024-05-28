<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar Método de Pago</title>
    <style>
        /* Estilos CSS */
        .container {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 10px;
        }
        select {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .button-container {
            text-align: center;
        }
        button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-right: 10px;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Seleccionar Método de Pago</h2>
        <form id="form">
            <label for="metodo_pago">Método de Pago:</label>
            <select id="metodo_pago" onchange="actualizarImportes()">
                <option value="usdt">USDT</option>
                <option value="pesos_ars">Pesos ARS</option>
            </select>
            <label for="importe">Importe:</label>
            <select id="importe">
                <option value="20">20$</option>
                <option value="50">50$</option>
                <option value="100">100$</option>
            </select>
        </form>
        <div class="button-container">
            <button onclick="siguiente()">Siguiente</button>
        </div>
    </div>

    <script>
        function actualizarImportes() {
            var metodoPago = document.getElementById('metodo_pago').value;
            var importeSelect = document.getElementById('importe');
            importeSelect.innerHTML = ''; // Limpiar opciones existentes
            if (metodoPago === 'usdt') {
                importeSelect.innerHTML += '<option value="20">20$</option>';
                importeSelect.innerHTML += '<option value="50">50$</option>';
                importeSelect.innerHTML += '<option value="100">100$</option>';
            } else if (metodoPago === 'pesos_ars') {
                importeSelect.innerHTML += '<option value="' + (20 * 1200) + '">20$</option>';
                importeSelect.innerHTML += '<option value="' + (50 * 1200) + '">50$</option>';
                importeSelect.innerHTML += '<option value="' + (100 * 1200) + '">100$</option>';
            }
        }

        function siguiente() {
            var metodoPago = document.getElementById('metodo_pago').value;
            var importe = document.getElementById('importe').value;
            if (metodoPago === 'usdt') {
                window.location.href = 'usdt.html';
            } else if (metodoPago === 'pesos_ars') {
                window.location.href = 'pesos_ars.html';
            }
        }
    </script>
</body>
</html>
