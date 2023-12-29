import express, { NextFunction, Request, Response } from "express";

const LoginRouter = express.Router();

//Add User 200=O.K
LoginRouter.post(
    "login",
    async (request: Request, response: Response, next: NextFunction) => {
      console.log("login User")
      response.status(200).json(`{"msg":"all is good"}`);
    }
  );

  //Register User 201=create
LoginRouter.post(
    "registerUser",
    async (request: Request, response: Response, next: NextFunction) => {
      console.log("Register User")
      response.status(201).json(`{"msg":"all is good"}`);
    }
  );

    //Register User 404=not O.K=delete
LoginRouter.delete(
    "deleteUser/:userId",
    async (request: Request, response: Response, next: NextFunction) => {
      console.log("delete User")
      response.status(404).json(`{"msg":"delete User"}`);
    }
  );

  //Update User
  LoginRouter.put(
    "/updateUser",
    async (request: Request, response: Response, next: NextFunction) => {
        console.log("update User");
      response.status(202).json(`{"msg":"user Updated"}`);
    }
  );


export default LoginRouter;