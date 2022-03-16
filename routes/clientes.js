var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");

var Cliente = mongoose.model("M_Cliente");

//funcion para recuperar a todos los clientes de la base de datos
router.get("/", function(req, res){
    Cliente.find({})
           .exec(function(err, rslt){
                if (err === null){
                    res.json(rslt);
                }else{
                    res.json({status:false, error:err});
                }
           });
});

//funcion para almacenar un nuevo usuario en la base de datos
router.post("/", function(req, res){
    
    var clt = req.body;
    var rfc, rfc_1, rfc_2, rfc_3, rfc_4, rfc_5, rfc_6;
    rfc_1 = clt.nombre.apellidoP[0] + clt.nombre.apellidoP[1];
    rfc_2 = clt.nombre.apellidoM[0];
    rfc_3 = clt.nombre.nombre[0];
    rfc_4 = clt.f_nacimiento[8] + clt.f_nacimiento[9];
    rfc_5 = clt.f_nacimiento[3] + clt.f_nacimiento[4];
    rfc_6 = clt.f_nacimiento[0] + clt.f_nacimiento[1];
    rfc = rfc_1 + rfc_2 + rfc_3 + rfc_4 + rfc_5 + rfc_6 + "XXX";
    rfc = rfc.toUpperCase();
    clt.rfc = rfc;
    console.log(clt);
    
    var cliente = new Cliente(clt);
    
    cliente.save(function(err, rslt){
        if(err === null){
            res.json(rslt);
        }else{
            res.json({status:false, error:err});
        }
    });
});

//funcion para actualizar a un usuario por su id en la base de datos
router.put("/:id", function(req, res){
    Cliente.updateOne( {_id : req.params.id} , req.body, function(err, rslt){
        if(err === null){
            res.json(rslt);
        }else{
            res.json( { status: false , error : err } );
        }
    });
});

//funcion para eliminar a un usuario por su id en la base de datos
router.delete("/:id", function(req, res){
    Cliente.remove({_id:req.params.id}, function(err, rslt){
        if(err === null){
            res.json(rslt);
        }else{
            res.json( { status: false , error : err } );
        }
    });
});

module.exports = router;