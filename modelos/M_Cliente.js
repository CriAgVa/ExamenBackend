var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//modelo para el almacenamiento de usuarios, con nombre, apellido paterno, apellido materno, fecha de nacimiento y rfc
var ClienteSchema = new Schema({
    nombre : {
        nombre: {type:String, default:"noname"},
        apellidoP: {type:String, default:"nofn"},
        apellidoM: {type:String, default:"-"}
    },
    f_nacimiento: {type:String, default:"-/-/-"},
    rfc: {type:String, default:"norfc"}
});

const Cliente = mongoose.model("M_Cliente", ClienteSchema, "Cliente");
module.exports = Cliente;