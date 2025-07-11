import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../constant/app.constant";
import { UnauthorizedException } from "../helpers/exception.helper";
import tokenService from "../../services/token.service";
import prisma from "../prisma/init.prisma";

const protectGraphQL = async (req) => {
   console.log(`protectGraphQL`);
   try {
      const authHeader = req.headers?.authorization || "";
      const [type, token] = authHeader.split(" ");
      if (!token) {
         throw new UnauthorizedException("Không có token");
      }
      if (type !== `Bearer`) {
         throw new UnauthorizedException("Kiểu token không hợp lệ");
      }

      
      console.log({ token });
      const decode = tokenService.verifyAccessToken(token);

      const user = await prisma.users.findUnique({
         where: {
            id: decode.userId,
         },
      });
      return user;
   } catch (error) {
      return null;
   }
};

export default protectGraphQL;
