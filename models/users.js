const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:"",
    userEmail:"",
    userPassword:"",
    userSongs:[],
    userPlaylists:[]
});

const User =module.exports=mongoose.model("Users",userSchema);

module.exports.createUser=(user,callback)=>{
    User.create(user,callback);
};

module.exports.findUserById=(id,callback)=>{
    User.findById(id,callback);
}

module.exports.findUserByEmail=(email,callback)=>{
    User.find({userEmail:email},callback);
}

module.exports.editUser=(id,user,callback)=>{
    User.findByIdAndUpdate(id,user,callback);
}

module.exports.deleteUser=(id,callback)=>{
    User.findByIdAndRemove(id,callback);
}