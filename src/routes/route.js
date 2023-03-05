const busController = require("../controllers/controller");

const routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: busController.getUsers,
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: busController.getSingleUser,
  },
  {
    method: "POST",
    url: "/api/users/create",
    handler: busController.addUser,
  },
  {
    method: "PUT",
    url: "/api/users/update/:id",
    handler: busController.updateUser,
  },
  {
    method: "DELETE",
    url: "/api/users/:id",
    handler: busController.deleteUser,
  },
];

module.exports = routes;
