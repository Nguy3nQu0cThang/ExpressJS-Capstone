import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../common/swagger/init.swagger.js";

import userRouter from "./user.router.js";
import photoRouter from "./photo.router.js";
import commentRouter from "./comment.router.js";
import savedRouter from "./saved.router.js";
import authRouter from "./auth.router.js";

const rootRouter = express.Router();

// Swagger: http://localhost:3069/api-docs
rootRouter.use("/api-docs", swaggerUi.serve);
rootRouter.get(
  "/api-docs",
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

// API routes
rootRouter.use("/user", userRouter);         // /user
rootRouter.use("/photo", photoRouter);       // /photo
rootRouter.use("/comment", commentRouter);   // /comment
rootRouter.use("/saved", savedRouter);       // /saved
rootRouter.use("/auth", authRouter);

export default rootRouter;
