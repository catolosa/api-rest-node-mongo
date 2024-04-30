const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModels')
const app = express();

const router = express.Router();

//CREATE
router.post("/", async (req,res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//READ
router.get("/", async (req,res)=>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

router.get("/:id", async (req,res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

//UPDATE
router.put("/:id", async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body)
    res.send(respuesta);
})

//DELETE
router.delete("/", async (req,res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id})
    res.send(respuesta);
})


app.use(express.json())
app.use(router)
app.listen(9000, ()=>{
    console.log("Servidor escuchando en puerto 9000");
});

dbconnect();