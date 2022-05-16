module.exports = (app) =>{
    //abrir o arquivo login.ejs
    app.post('/login', (req,res)=>{
        res.render('login.ejs')
    })
}