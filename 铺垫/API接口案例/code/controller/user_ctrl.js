import db from '../db/index.js'

async function getAllUser(req,res){
    const [rows] = await db.query('select id,username,nickname from ev_users')
    res.send({
        status:0,
        message:'获取用户列表成功！',
        data:rows,
    })
}

getAllUser()