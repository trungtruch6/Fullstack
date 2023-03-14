// Hàm render
import { cls } from 'sequelize';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage =  async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log('------------------------------------');

        console.log(data);

        console.log('------------------------------------');

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

};

let getUserPage = (req, res) => {
    return res.render('userPage.ejs')
}  

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message)
    return res.send('Post CRUD from Server')
}

module.exports =  {
    getHomePage: getHomePage,
    getUserPage: getUserPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}


// File controller này sẽ dùng nhiều hàm nên module.exports sẽ được đặt là {}
// đễ dẽ dàng gọi các hàm trong module.exports
// 
// 
// 
// 
