import { Router } from "express";
import { create , read, update, remove} from "../controllers/Todo.controller.js";


const router = Router();

router.post("/create", create);
router.get("/read", read);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);
export default router;
