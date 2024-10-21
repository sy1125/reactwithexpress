const { Sequelize, DataTypes } = require("sequelize");
const dbconfig = require("../config/config.json");

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.user,
  dbconfig.password,
  {
    host: dbconfig.host,
    dialect: "mysql",
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

const db = {};
db.sequelize = sequelize;

// 모델 불러오기
db.User = require("./users/user")(sequelize, Sequelize.DataTypes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스와 테이블이 동기화되었습니다.");
  })
  .catch((err) => {
    console.error("데이터베이스 동기화 오류:", err);
  });

module.exports = db;
