const photoSwagger = {
  "/photo": {
    get: {
      tags: ["Photo"],
      summary: "Lấy danh sách tất cả ảnh",
      responses: {
        200: {
          description: "Danh sách ảnh",
        },
      },
    },
    post: {
      tags: ["Photo"],
      summary: "Tạo ảnh mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_hinh: { type: "string" },
                duong_dan: { type: "string" },
                mo_ta: { type: "string" },
              },
              required: ["ten_hinh", "duong_dan"],
            },
          },
        },
      },
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Tạo ảnh thành công" },
      },
    },
  },
  "/photo/search": {
    get: {
      tags: ["Photo"],
      summary: "Tìm kiếm ảnh theo tên",
      parameters: [
        {
          name: "ten_hinh",
          in: "query",
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Kết quả tìm kiếm" },
      },
    },
  },
  "/photo/{id}": {
    get: {
      tags: ["Photo"],
      summary: "Chi tiết ảnh theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Thông tin ảnh + người đăng" },
      },
    },
    delete: {
      tags: ["Photo"],
      summary: "Xoá ảnh theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Xoá thành công" },
      },
    },
  },
};

export default photoSwagger