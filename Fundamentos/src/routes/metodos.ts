import { Router } from "express";
const router = Router()

let pessoas =[
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

router.delete("/:id", (req,res)=>{
    const indice = +req.params.id
    const dadoAtualizados = pessoas.filter((pessoa, i)=> i  !== indice)
    if(dadoAtualizados.length === pessoas.length){
        res.status(406).send(pessoas)
    }else{
        pessoas = [...dadoAtualizados]
        res.status(200).send(pessoas)
    }
})

router.put("/:id", (req,res)=>{
    const indice = +req.params.id
    const dadoAtualizados = req.body
    if(indice >=0 && indice < pessoas.length){
        if(dadoAtualizados.nome){
            pessoas[indice].nome = dadoAtualizados.nome
        }

        if(dadoAtualizados.idade){
            pessoas[indice].idade = dadoAtualizados.idade
        }
        res.status(200).send(pessoas)
    }else {
        res.status(406).send(pessoas)
    }
})


export default router