const mongoose = require("mongoose")
const Schema = mongoose.Schema

//限制模型内只能存 userId,nickName,label,time,genderText这几个字段
const UserType = {
    userId:String,
    nickName:String,
    label:String,
    time:String,
    genderText :String,
}

//利用mongoose创建一个叫userInfo的模型
//模型user 将会对应users 集合（它会自动加s）
//通过Schema限制user的字段
const UserInfoModel = mongoose.model("userInfo",new mongoose.Schema(UserType))

module.exports = UserInfoModel