import categoriesController from "../controllers/categories.controller";
import router from "./api";
import authController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";
import rbacMiddleware from "../middlewares/rbac.middleware";

// Auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post(
    "/auth/me",
    [authMiddleware, rbacMiddleware(["admin"])],
    authController.me
  );
router.put("/auth/update-profile", authMiddleware, authController.updateProfile);

// CRUD Categories
router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);
