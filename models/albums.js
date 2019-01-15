const mongoose=require("mongoose");

const albumsSchema=new mongoose.Schema({
    albumName:"",
    albumArstist:{
        type:Object,
        default:{}
    },
    albumSongs:{
        type:Array,
        default:[]
    },
    albumImage:""
});

const Album=module.exports=mongoose.model("Albums",albumsSchema);

module.exports.createAlbum=(album,callback)=>{
    Album.create(album,callback);
}

module.exports.findAlbums=(album,callback)=>{
    Album.find(album,callback);
}

module.exports.findAlbumByArtist=(artistId,callback)=>{
    Album.findOne({"albumArstist._id":artistId},callback);
}

module.exports.findSpecificAlbum=(id,callback)=>{
    Album.findById(id,callback);
}

module.exports.editAlbum=(id,album,callback)=>{
    Album.findByIdAndUpdate(id,album,callback);
}

module.exports.deleteAlbum=(id,callback)=>{
    Album.findByIdAndRemove(id,callback);
}