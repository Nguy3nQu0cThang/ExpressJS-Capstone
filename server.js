import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { handleError } from "./src/common/helpers/handle-err.helper.js";
import logApi from "./src/common/morgan/init.morgan.js";
import rootRouter from "./src/routers/root.router.js";

// GraphQL (nếu dùng)
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./src/common/graphql/schema.graphql.js";
import root from "./src/common/graphql/root.graphql.js";
import { ruruHTML } from "ruru/server";
import protectGraphQL from "./src/common/graphql/protect.graphql.js";

// Socket (nếu dùng)
import initSocket from "./src/common/socket/init.socket.js";

// Load .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logApi);
app.use(cors({
  origin: [process.env.CLIENT_URL || "http://localhost:3000"],
}));
app.use(express.static("."));

// GraphQL IDE (Ruru)
app.get("/ruru", (_req, res) => {
  res.type("html").end(ruruHTML({ endpoint: "/graphql" }));
});

// GraphQL handler
app.all("/graphql", createHandler({
  schema: schema,
  rootValue: root,
  context: async (req) => {
    const user = await protectGraphQL(req);
    return { user };
  },
}));

// REST API Routes
app.use(rootRouter);

// Error middleware (phải đặt sau cùng)
app.use(handleError);

// Tạo server và socket
const httpServer = createServer(app);
initSocket(httpServer);

// Start server
const PORT = process.env.PORT || 3069;
httpServer.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
