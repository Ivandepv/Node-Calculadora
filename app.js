const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
console.clear();
console.log('Hola' .random);
// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
.then(res=> console.log(res .random, 'creado'))
.catch(rej=>console.log(rej));

console.log('Hola' .random);
