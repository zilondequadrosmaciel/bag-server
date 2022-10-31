import { Router } from "express";
import { api, all, create, update, remove, one } from '../controllers/bag.controller.js'

export const router = Router();

router.get("/", api);

router.get("/bag", all);

router.post("/bag", create);

router.put("/bag/:id", update);

router.delete("/bag/:id", remove);

router.get("/bag/:id", one);
