module.exports = {
  components: {
    schemas: {
      getAllUsers: {
        type: "object",
        properties: {
          name: { type: "string", example: "철수", description: "이름" },
          email: {
            type: "string",
            example: "asd@asd.com",
            description: "이메일",
          },
          age: { type: "number", example: 23, description: "나이" },
          createAt: {
            type: "string",
            example: "2023-11-23",
            description: "작성날짜",
          },
          updateAt: {
            type: "string",
            example: "2023-11-28",
            description: "수정날짜",
          },
          id: { type: "number", example: 1, description: "id" },
        },
      },
      createUser: {
        type: "object",
        properties: {
          name: { type: "string", example: "철수", description: "이름" },
          email: {
            type: "string",
            example: "asd@asd.com",
            description: "이메일",
          },
          age: { type: "number", example: 23, description: "나이" },
        },
      },
    },
  },
};
