import { Router } from "express";

const router = Router();

router.get("/frutas/:id",(req,res)=>{
    const frutas = ["Maça", "Uva", "Limão", "Banana"]
    const id = +req.params.id
    if(id >= 0 && id < frutas.length){
        res.status(200).send(frutas[id])
    } else {
        res.sendStatus(204)
    }
})

router.get("/pessoa/:nome/:cor",(req,res)=>{
    const novaPessoa = {nome:req.params.nome, corPreferida: req.params.cor}
    res.status(201).send(`A cor Favorita de ${novaPessoa.nome} é ${novaPessoa.corPreferida}`)

})

export default router