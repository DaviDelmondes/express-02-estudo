import express from "express"
import rotasBasicos from "./routes/basicos"
import diferenteRetorno from "./routes/diferentesRetorno"
import rotasAninhadas from "./routes/rotasAninhadas"
import rotasStatus from "./routes/status"
import rotasParametrosDeRotas from "./routes/parametrosDeRotas"

const app = express()
const porta = 8080

//app.use(rotasBasicos)
app.use(rotasBasicos)
app.use(diferenteRetorno)
app.use("/produtos", rotasAninhadas)
app.use("/status", rotasStatus)
app.use("/parametrosDeRotas", rotasParametrosDeRotas)

app.listen(porta, () => {
    console.log("Servidor rodando")
})