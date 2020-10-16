import {Router} from "express";

import multer from "multer";
import UploadConfig from "./config/upload";

import OrphanageController from "./controllers/OrphanagesControllers";

const routes = Router();
const upload = multer(UploadConfig);

routes.post("/orphanages", upload.array("images"),OrphanageController.create);
routes.get("/orphanages", OrphanageController.index);
routes.get("/orphanages/:id", OrphanageController.show);

export default routes;