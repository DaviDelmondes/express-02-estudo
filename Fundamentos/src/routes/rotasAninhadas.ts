import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Aqui exitem produtos")
})

router.get("/cozinha",(req,res)=>{
    const prods = ["Colher", "Garfo", "Panela", "Detergente"]
    res.send(prods)
})

router.get("/banheiro",(req,res)=>{
    const prods = ["Sabonetes", "Escova de dentes", "Chuveiro", "Espelho"]
    res.send(prods)
})

export default router;