// Hàm render
import { cls } from "sequelize";
import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getUserPage = (req, res) => {
  return res.render("userPage.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("Post CRUD from Server");
};

let displayCRUD = async (req, res) => {
  let data = await CRUDservice.getAllUser();
  console.log("------------------------------------");
  console.log(data);
  console.log("------------------------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let editCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDservice.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found!");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDservice.updateUserData(data);
  console.log(allUsers);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};
let deleteCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDservice.deleteUserById(userId);
    return res.send("Success");
  } else {
    return res.send("");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getUserPage: getUserPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  editCRUD: editCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};

// File controller này sẽ dùng nhiều hàm nên module.exports sẽ được đặt là {}
// đễ dẽ dàng gọi các hàm trong module.exports
//
//
//
//
