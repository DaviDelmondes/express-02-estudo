import express from "express"
import rotasBasicos from "./routes/basicos"
import diferenteRetorno from "./routes/diferentesRetorno"
import rotasAninhadas from "./routes/rotasAninhadas"
import rotasStatus from "./routes/status"

const app = express()
const porta = 8080

//app.use(rotasBasicos)
app.use(rotasBasicos)
app.use(diferenteRetorno)
app.use("/produtos", rotasAninhadas)
app.use("/status", rotasStatus)

app.listen(porta, () => {
    console.log("Servidor rodando")
})