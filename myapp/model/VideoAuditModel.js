const mongoose = require("mongoose")
const Schema = mongoose.Schema

//限制模型内只能存 userId,nickName,label,time,genderText这几个字段
const UserType = {
    img:String,
    title:String,
    userId:String,
    time:String,
    video:String,
    classify:String,
    nickName:String
}

//利用mongoose创建一个叫videoInfo的模型
//模型videoInfo 将会对应users 集合（它会自动加s）
//通过Schema限制user的字段
const VideoAuditModel = mongoose.model("VideoAudit",new Schema(UserType))

module.exports = VideoAuditModel