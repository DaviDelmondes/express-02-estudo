import { Router } from "express";
const router = Router()

const pessoas =[
    {nome:"Catia", idade:34},
    {nome:"Mauro", idade:45},
    {nome:"Otavio", idade:14}
]

router.get("/",(req,res)=>{
    res.status(200).send(pessoas)
})

router.post("/", (req, res)=>{
    const novaPessoa = {nome:req.body.nome, idade:+req.body.idade}
    pessoas.push(novaPessoa)
    res.status(201).send(pessoas)
})

router.get("/:id",(req,res)=>{
    const indice = +req.params.id
    if (indice >= 0 && indice < pessoas.length){
        res.status(200).send(pessoas[indice])
    }else{
        res.status(204).send(pessoas)
    }
})

export default router