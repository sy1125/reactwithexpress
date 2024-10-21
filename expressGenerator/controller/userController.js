const pool = require("../database/database.js");
const { User } = require("../models");

// exports.createUser = async (req, res) => {
//   console.log("POST /users 요청 받음");
//   console.log("요청 본문:", req.body);

//   const { name, email, age } = req.body;

//   if (!name || !email) {
//     console.log("유효성 검사 실패: 필수 필드 누락");
//     return res
//       .status(400)
//       .json({ error: "이름과 이메일은 필수 입력 항목입니다." });
//   }

//   const query = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";

//   try {
//     console.log("데이터베이스 쿼리 실행:", { name, email, age });
//     const [results] = await pool.query(query, [name, email, age]);
//     console.log("사용자 생성 성공:", results);

//     res.status(201).json({
//       id: results.insertId,
//       message: "사용자가 생성되었습니다.",
//     });
//   } catch (err) {
//     console.error("데이터베이스 오류:", err);
//     res.status(500).json({ error: err.message });
//   }
// };
exports.createUser = async (req, res) => {
  console.log("POST /users 요청 받음");
  console.log("요청 본문:", req.body);

  const { name, email, age } = req.body;

  if (!name || !email) {
    console.log("유효성 검사 실패: 필수 필드 누락");
    return res
      .status(400)
      .json({ error: "이름과 이메일은 필수 입력 항목입니다." });
  }

  try {
    console.log("사용자 생성 시도:", { name, email, age });
    const newUser = await User.create({ name, email, age });
    console.log("사용자 생성 성공:", newUser);

    res.status(201).json({
      id: newUser.id,
      message: "사용자가 생성되었습니다.",
    });
  } catch (err) {
    console.error("데이터베이스 오류:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  console.log("GET /users 요청 받음");

  try {
    const [results] = await pool.query("SELECT * FROM users");
    console.log("사용자 목록 조회 성공:", results);
    res.json(results);
  } catch (err) {
    console.error("데이터베이스 오류:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsersData = async () => {
  try {
    const [results] = await pool.query("SELECT * FROM users");
    return results;
  } catch (err) {
    throw new Error("사용자 데이터를 가져오는 중 오류 발생: " + err.message);
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM users WHERE id = ?";

  try {
    const [results] = await pool.query(query, [id]);
    if (results.length === 0) {
      res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
      return;
    }
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  console.log("PATCH /users/:id 요청 받음");
  const { id } = req.params;
  const updates = req.body;

  try {
    const fields = Object.keys(updates); // updates의 key 값을 배열로 반환
    if (fields.length === 0) {
      return res
        .status(400)
        .json({ error: "업데이트할 필드가 지정되지 않았습니다." });
    }

    const allowedFields = ["name", "email", "age"];
    // updates에 포함된 필드 중 allowedFields에 있는 필드만 걸러내어 validFields로 저장
    const validFields = fields.filter((field) => allowedFields.includes(field));

    if (validFields.length === 0) {
      return res
        .status(400)
        .json({ error: "유효한 업데이트 필드가 없습니다." });
    }

    const setClause = validFields.map((field) => `${field} = ?`).join(", ");
    const values = validFields.map((field) => updates[field]);
    values.push(id);

    const query = `UPDATE users SET ${setClause} WHERE id = ?`;
    console.log("실행될 쿼리:", query);
    console.log("쿼리 파라미터:", values);

    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }

    const [updatedUser] = await pool.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);

    res.json({
      message: "사용자 정보가 업데이트되었습니다.",
      user: updatedUser[0],
    });
  } catch (err) {
    console.error("데이터베이스 오류:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";

  try {
    const [results] = await pool.query(query, [id]);
    if (results.affectedRows === 0) {
      res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
      return;
    }
    res.status(200).json({ message: "사용자가 삭제되었습니다." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
