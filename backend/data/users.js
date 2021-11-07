import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Devraj Singh",
    email: "devraj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Abhay Singh",
    email: "abhay@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
