const commentSwagger = {
    "/comment": {
      post: {
        tags: ["Comment"],
        summary: "Tạo bình luận",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  hinh_id: { type: "integer" },
                  noi_dung: { type: "string" },
                },
                required: ["hinh_id", "noi_dung"],
              },
            },
          },
        },
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Bình luận thành công" },
        },
      },
    },
    "/comment/{photoId}": {
      get: {
        tags: ["Comment"],
        summary: "Lấy bình luận theo ID ảnh",
        parameters: [
          {
            name: "photoId",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: { description: "Danh sách bình luận" },
        },
      },
    },
}

export default commentSwagger;