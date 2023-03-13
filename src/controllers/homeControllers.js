// Hàm render


let getHomePage =  (req, res) => {
    return res.render('homePage.ejs')
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
