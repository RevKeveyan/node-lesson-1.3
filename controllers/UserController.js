const { USERS } = require('../constants') // nutn importna

exports.getUsers = (req, res) =>{
    //get enq anum userd DataBase-is
    const data = JSON.stringify(USERS);
    res.end(data);
}