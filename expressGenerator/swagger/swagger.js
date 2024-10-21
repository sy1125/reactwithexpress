const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const components = require("./components");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "expressGenerator",
      description: "Sample Express App RESTful API Documentation",
      version: "1.0.0",
    },
    components: components.components,
  },
  apis: ["../routes/*.js", "./swagger/CreateUsers.js", "./swagger/Users.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
