import { Router } from "express";
import path = require("path")

const router = Router()


router.get("/variavel", (req,res)=>{
    let v = "adeus"
    res.send(v);
})

router.get("/variavelNumerica", (req,res)=>{
    let v = "1758"
    res.json(v);
})

router.get("/objeto", (req,res)=>{
    let obj = {nome: "maria", idade:54}
    res.send(obj) // obj sera enviado como json
})

router.get("/arrayDeobjetos", (req,res)=>{
    const objs = [
        {modelo:"Gol", ano:1988},
        {modelo:"Uno", ano:2005},
        {modelo:"Celta", ano:2010}
    ];
    res.send(objs);
})

router.get("/html", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "assets","pagina.html"));
})

router.get("/pdf",(req,res)=>{
    res.sendFile(path.join(__dirname, "..", "assets", "arquivo.pdf"))
})
export default router;