import { Router } from "express";

const router = Router();

router.get("/frutas/:id",(req,res)=>{
    const frutas = ["Maça", "Uva", "Limão", "Banana"]
    const id = +req.params.id
    if(id >= 0 && id < frutas.length){
        res.status(200).send(frutas[id])
    }
    res.sendStatus(204)
})
export default router