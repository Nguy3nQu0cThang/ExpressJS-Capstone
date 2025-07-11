import authSwagger from "./auth.swagger";
import commentSwagger from "./comment.swagger";
import photoSwagger from "./photo.swagger";
import savedSwagger from "./saved.swagger";
import userSwagger from "./user.swagger";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Photo Sharing API",
    version: "1.0.0",
    description: "API cho hệ thống chia sẻ hình ảnh - Capstone project",
  },
  servers: [
    {
      url: "http://localhost:3069",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
  paths: {
    authSwagger,
    photoSwagger,
    commentSwagger,
    savedSwagger,
    userSwagger
  },
};

export default swaggerDocument;
