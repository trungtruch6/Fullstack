// Hàm render
import { cls } from 'sequelize';
import db from '../models/index';

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
    
module.exports =  {
    getHomePage: getHomePage,
    getUserPage: getUserPage,
}


// File controller này sẽ dùng nhiều hàm nên module.exports sẽ được đặt là {}
// đễ dẽ dàng gọi các hàm trong module.exports
// 
// 
// 
// 
