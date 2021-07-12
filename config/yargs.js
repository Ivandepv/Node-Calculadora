const argv = require('yargs')
             .options({
               'b': {
                 alias: 'base',
                 type: 'number',
                 demandOption: true,
                 describe: "Es la base de la tabla de multiplicar"
                    },
               'l': {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: "Muestra la tabla en consola"
                    },
               'h': {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: "veces que multiplica"
                    }
             })
             .check((argv, options)=>{
              if(Number.isInteger(argv.b) && Number.isInteger(argv.h)){
                return true;

              }else{
                throw "la base y el hasta tienen que ser un numero";
              }
             })
             .argv;

module.exports = argv;
