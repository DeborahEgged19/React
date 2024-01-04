//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config";
import ErrorHandler from "./MiddleWare/route-not-found";
import router from "./Routes/VideoRoutes";
import LoginRouter from "./Routes/LoginRoutes";
import VideoLogic from "./Logic/VideoLogic";

//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save the video files
server.use(express.static("user_videos"));

//enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
//all categories (becuase of hila) => http://localhost:8080/api/v1/videos/newCat/catName
server.use("/api/1/videos", router);
server.use("/api/v1/users", LoginRouter);

//create our tables if they not exists
console.log("table exists");
VideoLogic.createSongsTable()
VideoLogic.createCategoriesTable()


//handle errors (route not found)
server.use("*", ErrorHandler);


//start the server
server.listen(config.WebPort, () => {
  console.log(`listinging on http://${config.mySQLhost}:${config.WebPort}`);
});
