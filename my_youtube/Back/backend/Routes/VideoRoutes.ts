import express, { NextFunction, Request, Response } from "express";
import VideoLogic from "../Logic/VideoLogic";

const router = express.Router();

//Add Video
router.post(
  "addVideo",
  async (request: Request, response: Response, next: NextFunction) => {
    const body=request.body;
    console.log("Request Body:",body)
    response.status(201).json(`{"msg":"video was uploaded"}`);
  }
);

//DELETE method
router.delete(
  "deleteVideo/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const videoId=+request.params.id || null;
    if(videoId === null ||videoId<1){
      response.status(404).json(`{"msg":"video was deleted"}`);
    }
    console.log("deleting");
    response.status(204);
  }
);

//Get VideoList
router.get(
  "videoList",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//Get VideoList
router.post(
  "/newCat/:catName",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in video routes");
    //console.log(request.body);
    //const catName = request.body.params.catName;
    //console.log(catName);
    //response.status(201).json( await VideoLogic.addCategory(request.params.catName));
  }
);

router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("controlling!");
  }
);











export default router;
