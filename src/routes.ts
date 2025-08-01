import express from "express";
import { middleware } from "./middleware.js";
import { test } from "./test.js";

const router = express.Router();

router.get(`/test`, middleware, test);

export default router;