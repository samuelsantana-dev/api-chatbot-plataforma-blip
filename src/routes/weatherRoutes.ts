import { Router } from "express";
import { weatherController } from "../controllers/weatherController";

const router = Router();

router.get("/weather", weatherController);
router.get("/home", (req, res) => {
     console.log("✅ Rota raiz acessada");
    res.send("API de Previsão do Tempo está funcionando!");
});
export default router;
