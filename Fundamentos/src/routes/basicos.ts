import {Router} from "express"

const router = Router()



router.get("/", (_req, res) => {
    res.send("<h1>olá mundo</h1>")
})
export default router;