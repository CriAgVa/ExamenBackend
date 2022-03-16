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