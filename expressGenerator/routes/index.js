var express = require("express");
var router = express.Router();
const userController = require("../controller/userController.js");

// 메인 페이지 렌더링 (사용자 목록 포함)
router.get("/", async (req, res) => {
  try {
    const users = await userController.getAllUsersData();
    res.render("index", { users: users });
  } catch (error) {
    res.status(500).render("error", { error: error });
  }
});

// API 라우트
router.post("/api", userController.createUser);

router.get("/api/users", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
