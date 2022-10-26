class usuario{
constructor (nombre, apellido, libros, mascotas){
this.nombre=nombre
this.apellido=apellido;
this.libros= [libros] 
this.mascotas=[mascotas];
}
getFullName(){
console.log (`NOMBRE COMPLETO: ${this.nombre} ${this.apellido}`) 
}
addMascotas (nombreMascotas){
this.mascotas.push(nombreMascotas);
}
countMascotas (){
console.log(this.mascotas.length);
}
addBook (nombreDelLibro,autorDelLibro){
this.libros.push({
Titulo: nombreDelLibro, 
Autor:autorDelLibro}); 
} 
getNameBook(){
let nameBook = this.libros.map(function(titulos){
return titulos.Titulo
})
console.log (nameBook) 
}
}
const usuario1 = new usuario("Maximiliano", "Gonzalez", {Titulo:"El resplandor" , Autor:"Stephen King"}, "Spike")
usuario1.addBook ("Cien años de soledad" , "Gabriel Garcia Marquez")
usuario1.addBook("el Hobbit", "JRR Tolkien")
usuario1.addMascotas("blanquito")
usuario1.getFullName()
usuario1.countMascotas()
usuario1.getNameBook()
console.log (usuario1)
