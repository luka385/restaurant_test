import { Usecase } from "./application/usecases/usecase";
import express,{ Express } from "express";
import dotenv from 'dotenv'
import { PrismaRepository } from "./infrastructure/adapters/mysql/mysql";
import { setupServer } from "./infrastructure/adapters/http/server/server";

dotenv.config()

 const repo = new PrismaRepository();
 const usecase = new  Usecase(repo);
 const r = setupServer(usecase);
 
const port = process.env.PORT || 3000;
const app : Express = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(r);


 app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
 })




