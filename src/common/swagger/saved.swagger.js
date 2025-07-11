const savedSwagger = {
    "/saved/{photoId}": {
      get: {
        tags: ["Saved"],
        summary: "Kiểm tra ảnh đã lưu chưa",
        parameters: [
          {
            name: "photoId",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: { 200: { description: "Trả về true/false" } },
        security: [{ bearerAuth: [] }],
      },
    },
    "/saved": {
      post: {
        tags: ["Saved"],
        summary: "Lưu ảnh",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  hinh_id: { type: "integer" },
                },
                required: ["hinh_id"],
              },
            },
          },
        },
        responses: { 200: { description: "Lưu thành công" } },
        security: [{ bearerAuth: [] }],
      },
    },
}

export default savedSwagger