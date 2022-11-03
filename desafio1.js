const {promises: fs } = require('fs');


class Contenedor {
    constructor (ruta){
        this.ruta = ruta
    }

     async getAll(){
        try {
            let data = await fs.readFile ( './productos.txt' , 'utf-8')
            return data
            } catch (error) {
            return []
            }
        }
     async save (producto){
        let data = this.getAll()
        let id = 0
        let dataObj = null
        if(data.lenght == 0){
            id = 1
        }else{
            let dataObj = JSON.parse (data)
            id = dataObj [ dataObj.lenght - 1 ].id +1
        }
        let newObjt = {id: id, ... producto}
        this.dataObj.push ({titulo, precio, thumbnail})
        try {fs.writeFile( './productos.txt' , JSON.stringify(newObjt, null, 2))
            console.log ("se escribio con exito")
        }catch(err) {
            console.log( "ocurrio un error al escribir el archivo :\n" + err)
        }
     }
     async getById (){
        data = this.getAll()
        

     }
     
}

