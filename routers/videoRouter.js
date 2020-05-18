import express from "express";
import routes from "../routes";

const videoRouter = express.Router();
videoRouter.get(routes.videos);
videoRouter.get(routes.upload);
videoRouter.get(routes.videoDetail);
videoRouter.get(routes.editVideo);
videoRouter.get(routes.deleteVideo);
export default videoRouter;
