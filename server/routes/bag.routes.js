import { Router } from "express";
import { all, create, update, remove, one } from '../controllers/bag.controller.js'

export const router = Router();

router.get("/bag", all);

router.post("/bag", create);

router.put("/bag/:id", update);

router.delete("/bag/:id", remove);

router.get("/bag/:id", one);
