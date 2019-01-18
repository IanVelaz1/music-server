const User = require("../models/users");

module.exports = (app) => {
    app.get("/user/:id", (req, res) => {
        const id = req.params.id;
        User.findUserById(id, (error, user) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "error recovering user"
                });
            } else {
                res.status(200).json({
                    success: true,
                    user
                });
            }
        });
    });

    app.post("/users/mail/:mail", (req, res) => {
        const mail = req.params.mail;
        User.findUserByEmail(mail, (error, user) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "error recovering user"
                });
            } else {
                
                if(user[0]){ if(req.body.userPassword===user[0].userPassword){
                    res.status(200).json({
                        success: true,
                        user
                    });
                }}else{
                    res.status(400).json({
                        error: error,
                        msg: "wrong password"
                    });
                }
               
            }
        });
    });

    app.post("/users", (req, res) => {
        const user = req.body;
        User.createUser(user, (error, user) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "error creating user"
                });
            } else {
                res.status(200).json({
                    success: true,
                    user
                });
            }
        });
    });

    app.put("/users/:id",(req,res)=>{
        const id=req.params.id;
        const user=req.body;
        User.editUser(id,user,(error,user)=>{
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "error editing user"
                });
            } else {
                res.status(200).json({
                    success: true,
                    user
                });
            }
        });
    });

    app.delete("/users/:id",(req,res)=>{
        const id=req.params.id;
        User.deleteUser(id,(error,user)=>{
            if (error) {
                res.status(400).json({
                    error: error,
                    msg: "error deleting user"
                });
            } else {
                res.status(200).json({
                    success: true,
                    user
                });
            }
        });
    });

}