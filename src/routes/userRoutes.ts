import express from "express";
import { registrarUsuario, loginUsuario } from "../controllers/userController";

const router = express.Router();

// Ruta para registrar un usuario
router.post("/register", registrarUsuario);

// Ruta para hacer login de un usuario
router.post("/login", loginUsuario);

// Ruta para obtener todos los usuarios (puedes cambiarla según lo que necesites)
router.get("/", (req, res) => {
  res.send("Lista de usuarios");
});

export default router;
