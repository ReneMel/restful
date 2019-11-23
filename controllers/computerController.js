    var user = require('../models/Computer');
var debug = require('debug')('restful:user_controller');

const getOne = (req, res, next) => {
    debug("Search cpu", req.params);
    console.log(req.params.Modelo);
    
    user.findOne({
            Modelo: req.params.Modelo
        }, " -login_count")
        .then((foundUser) => {
            debug("Found User", foundUser);
            if (foundUser)
                return res.status(200).json(foundUser);
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}

const getAll = (req,res,next)=>{
    var perPage = Number(req.query.size) || 10;
    var page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createAt";
    var sort = req.query.sort || "desc";

    debug("User list:", {size: perPage,page, sortby: sortProperty,sort});

    user.find({},"-password -login_count")
    .limit(perPage)
    .skip(perPage * page)
    .sort({[sortProperty]: sort})
    .then(users=>{
        return res.status(200).json(users);
    })
    .catch(err=>{
        next(err)
    });
}

const register = (req,res,next)=>{
    debug("New user: ", {body: req.body});

    user.findOne({
        Modelo: req.body.modelo
    }, "-password -login_count")
    .then(foundUser=>{
        if (foundUser) {
            debug("Usuario duplicado");
            throw new Error(`Usuario duplicado ${req.body.modelo}`);
        } else {
            let newUser = new user({
                Marca: req.body.marca,
                Modelo: req.body.modelo,
                Memoria: req.body.memoria || "",
                precio: req.body.precio || "",
                tipo: req.body.tipo,
                Sistema_Operativo: req.body.sistema_operativo
            });
            return newUser.save();
        }
    })
    .then(user=>{
        return res
        .header('Location','/computers/' + user._id)
        .redirect('/')
       /* .json({
            username: user.Modelo
        });*/

        console.log('registrado!!!');
        
    })
    .catch(err=>{
        next(err);
    });
}

const update = (req,res,next)=>{
    debug("Update cpu: ", {
        Modelo: req.params.Modelo,
        ...req.body
    })
    let update = {
        ...req.body
    }

    user.findOneAndUpdate({
        Modelo: req.params.Modelo
    }, update, {
        new: true
    })
    .then(updated=>{
        if (updated) {
            return res.status(200).json(updated)
        }
        else {
            return res.status(400).json(null);
        }
    })
    .catch(err=>{
        next(err);
    });
}

const Delete = (req, res, next) => {
    debug("Delete Computer", {
        Modelo: req.params.Modelo,
    });

    user.findOneAndDelete({Modelo: req.params.Modelo})
    .then((data) =>{
        if (data) {
            console.log('Se elimino!!!!!!!!!!!!');
            
            res.status(200).json(data);
        }
        else {
            res.status(404).send();
        }
    }).catch( err => {
        next(err);
    })
}

module.exports = {getOne,getAll,register,update,Delete}; 