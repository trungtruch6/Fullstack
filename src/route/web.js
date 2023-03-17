import express from "express";
import homeControllers from "../controllers/homeControllers";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeControllers.getHomePage);

  router.get("/user", homeControllers.getUserPage);

  router.get("/crud", homeControllers.getCRUD);

  router.post("/post-crud", homeControllers.postCRUD);

  router.get("/display-crud", homeControllers.displayCRUD);

  router.get("/edit-crud", homeControllers.editCRUD);

  router.post("/put-crud", homeControllers.putCRUD);

  router.get("/delete-crud", homeControllers.deleteCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
