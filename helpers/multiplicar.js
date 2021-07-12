const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (number = 5, listar, hasta)=>{

  // return new Promise((resolve, rejection)=>{

      try {


        let salida, consola = '';

        for (let i = 1; i <= hasta; i++){
        salida += `${number} x ${i} = ${number*i}\n`
        consola += `${number} ${'x' .green} ${i} ${'='.green} ${number*i}\n`
        };
        if(listar){
          console.log('***********' .cyan);
          console.log(colors.brightGreen(`TABLA DEL `, number));
          console.log('***********'.cyan);
          console.log(consola);
        }



        fs.writeFileSync(`./salida/tabla-del-${number}.txt`, salida);

        return `tabla de ${number}.txt`;


        } catch (e) {
          throw e;
      }

    // })
}

module.exports ={
   crearArchivo
}
