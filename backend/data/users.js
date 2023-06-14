import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true
  },
  {
    name: "david",
    email: "david@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: false
  },
  {
    name: "bob",
    email: "bob@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: false
  }
];

export default users;
