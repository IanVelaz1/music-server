const Album = require("../models/albums.js");

module.exports = (app) => {

    app.get("/album", (req, res) => {
        Album.findAlbums({}, (error, albums) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "arror at recovering albums"
                });
            } else {
                res.status(200).json({
                    success: true,
                    albums
                });
            }
        });
    })

    app.get("/album/:id", (req, res) => {
        const id = req.params.id;
        Album.findSpecificAlbum(id, (error, album) => {
            if (error) {
                res.json({
                    error: error,
                    msg: "error at recovering album"
                })
            } else {
                res.json({
                    success: true,
                    album
                });
            }
        });
    });

    app.get("/album/artist/:id", (req, res) => {
        const artistId = req.params.id;
        Album.findAlbumByArtist({"albumArtist._id":artistId}, (error, album) => {
            if (error){
                res.json({
                    error: error,
                    msg: "error at recovering album"
                })
            } else {
                res.json({
                    success: true,
                    album
                });
            }
        });
    });

    app.post("/album", (req, res) => {
        const album = req.body;
        Album.createAlbum(album, (error, album) => {
            if (error) {
                res.json({
                    error: error,
                    msg: "error creating album"
                });
            } else {
                res.json({
                    success: true,
                    album
                });
            }
        });
    });

    app.put("/album/:id", (req, res) => {
        const id = req.params.id;
        const album = req.body;
        Album.editAlbum(id, album, (error, album) => {
            if (error) {
                res.json({
                    error: error,
                    msg: "error editing album"
                });
            } else {
                res.json({
                    success: true,
                    album
                });
            }
        });
    });

    app.delete("/album/:id",(req,res)=>{
        const id =req.params.id ;
        Album.deleteAlbum(id,(error,album)=>{
            if (error) {
                res.json({
                    error: error,
                    msg: "error editing album"
                });
            } else {
                res.json({
                    success: true,
                    album
                });
            }
        });
    })

}