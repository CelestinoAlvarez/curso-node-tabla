const argv = require("yargs")
            .option('b',
                    {
                        alias:'base',
                        type:'number',
                        demandOption:'true',
                        describe:'Base de la tabla de multiplicar'
                    }

            )
            .option('l',
            {
                alias:'listar',
                type:'boolean',
                demandOption:'true',
                default:'false',
                describe:'Especifica si se lista la tabla'
            }
            )
            .option('h',
            {
                alias:'hasta',
                type:'number',
                demandOption:'true',
                default:'10',
                describe:'Especifica la cantidad de operaciones'
            }
            )
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw("La base tiene que ser un número.")
                }
                return true;
            })  
            .argv;

            module.exports={argv};