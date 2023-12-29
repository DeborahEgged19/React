import express, { NextFunction, Request, Response } from "express";

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









router.post(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//GET Method check
router.get(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.get(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//PUT Method check
router.put(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.put(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

//DELETE method
router.delete(
  "/checkOK",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"OK"}`);
  }
);

router.delete(
  "/checkBAD",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(400).json(`{"msg":"Error"}`);
  }
);

export default router;
