const fs=require('fs');
require('colors');

const crearArchivo=(base,listar,hasta)=>{

    return new Promise((resolve,reject)=>{
        try {
            let salida="";

            console.log("Tabla del ",base);
        
            for(let i=0;i<=hasta;i++){
            salida+=`${base}x${i}=${base*i}\n`;
            }

            console.log("Listar:",listar);

            if (listar){
                         console.log(salida);
                        }

            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt creada`);
            
        } catch (error) {
            reject("Error en la creación de la tabla");
        }
        
    })  
}


module.exports={
    crearArchivo
}