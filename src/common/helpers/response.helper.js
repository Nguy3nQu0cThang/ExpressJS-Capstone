export const responseSuccess = (data = null, message = `OK`, statusCode = 200) => {
   return {
      stautus: `success`,
      statusCode: statusCode,
      message: message,
      data: data,
      doc: "domain.com/swagger",
   };
};

export const responseError = (
   message = `Internal Server Error`,
   statusCode = 500,
   stack = null
) => {
   const code = typeof statusCode === "number" ? statusCode : 500;

   return {
      status: `error`,
      statusCode: code,
      message,
      stack,
      doc: "domain.com/swagger",
   };
};

