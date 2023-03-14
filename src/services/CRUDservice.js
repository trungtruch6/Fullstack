import bcrypt from 'bcryptjs'; // Thư viện mã hoá password sang hashpassword
import db from '../models/index' // Lấy dữ liệu từ database
const salt = bcrypt.genSaltSync(10);
// Tạo dữ liệu người dùng
let createNewUser = async (data) => {
    return new Promise (async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data === 1 ? true : false,
                roleId: data.roleId,
            })

            resolve('Creat a new User succeed!');
            console.log('------------------------------------');
            
            console.log(hashPasswordFromBcrypt);
            console.log('************************************');
            console.log(data);

            console.log('------------------------------------');
        } catch (error) {
            reject(error)
        }
    })
    
}
// Mã hoá password thành hashpassword
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword
}


// Nhận Data từ Controller và xử lý dữ liệu và gửi lại Data cho Controller để hiển thị.