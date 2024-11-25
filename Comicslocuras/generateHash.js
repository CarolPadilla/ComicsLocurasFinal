const md5 = require('md5');

const ts = '1'; // Este es el timestamp (puedes usar cualquier número, como '1')
const publicKey = '6f23ba4aef617034780fcdc7fdc09f27'; // Reemplaza con tu clave pública de Marvel
const privateKey = 'd56c41802c0cf04ed4da533e5b1cc924970817f8'; // Reemplaza con tu clave privada de Marvel

// Genera el hash
const hash = md5(ts + privateKey + publicKey);

console.log('El hash generado es:', hash);
