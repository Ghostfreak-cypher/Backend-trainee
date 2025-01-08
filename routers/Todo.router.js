import { Router } from "express";
import { create , read, update, remove, toggle} from "../controllers/Todo.controller.js";


const router = Router();

router.post("/create", create);
router.post("/read", read);
router.post("/update/:id", update);
router.post("/toggle/:id", toggle);
router.post("/delete/:id", remove);

export default router;