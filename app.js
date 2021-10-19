
const { crearArchivo }=require('./helpers/multiplicar');
const {argv} =require('./config/yargs');
const colors=require('colors');


console.clear();

console.log(colors.blue('Título'));

// const [ , , arg3='base=5']=process.argv;
// const [ ,base=5]=arg3.split("=");

// console.log(base);

//const base=7;


// console.log("Tabla del ",base);
// for(i=0;i<=10;i++){
//     salida+=(`${base}x${i}=${base*i}\n`);
// }

// // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
// //     if (err) throw err;
// //     console.log("Tabla creada");
// // })

// fs.writeFileSync(`tabla-${base}.txt`,salida);

crearArchivo(argv.b, argv.l, argv.h).then(e=>console.log(e))
                .catch(err=>console.log(err));

