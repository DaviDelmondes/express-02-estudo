import express from "express"
import rotasBasicos from "./routes/basicos"
import diferenteRetorno from "./routes/diferentesRetorno"

const app = express()
const porta = 8080

//app.use(rotasBasicos)
app.use(rotasBasicos)
app.use(diferenteRetorno)

app.listen(porta, () => {
    console.log("Servidor rodando")
})