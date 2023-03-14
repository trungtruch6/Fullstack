import express from "express";
import homeControllers from "../controllers/homeControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    
    router.get('/user', homeControllers.getUserPage);

    router.get('/crud', homeControllers.getCRUD);

    router.post('/post-crud', homeControllers.postCRUD)

    return app.use("/", router);
};

module.exports = initWebRoutes;