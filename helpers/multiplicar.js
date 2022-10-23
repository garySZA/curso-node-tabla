const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = true, hasta = 5 ) => {
    
    let salida, consola = '';
    
    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${index*base} \n`;
        consola += `${base} ${'x'.cyan} ${index} ${'='.yellow} ${index*base} \n`;
    }
    
    if(listar){
        console.log('=========================='.green);
        console.log('    TABLA DEL:     '.green, colors.blue(base));
        console.log('=========================='.green);
        console.log(consola)
    }

    const fileName = `./salida/tabla-${base}.txt`;

    try {
        await fs.writeFileSync( fileName, salida)
    
        console.log('archivo creado')
    
        return fileName;
        
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo,
}