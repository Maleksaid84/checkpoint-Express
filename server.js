const express = require('express')
const app= express()


const port = 5051

    const AccessTime = (req, res, next) => {
        const currentDay = new Date().getDay();             // 0 pour dimanche, 1 pour lundi, ..., 6 pour samedi
        const currentHour = new Date().getHours();         // Pour afficher L'heur...
    
        if (currentDay >= 1 && currentDay <= 6 && currentHour >= 9 && currentHour <= 21) {
            next();
        } else {
            res.status(403).send("Nous sommes fermés en dehors des heures d'ouverture du lundi au jeudi, de 9h à 18h.");
        }
    };
    app.use(AccessTime)

      
   


app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/views/home.html')
})

app.get('/Css/styles.css',(req,res)=>{
    res.status(200).sendFile(__dirname+'/views/Css/styles.css')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname+ '/Views/home.html')})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+ '/Views/contact.html')

})

app.get('/Ourservices', (req, res) => {
    res.sendFile(__dirname+ '/Views/Our Services.html')})

 
    
     
    

app.listen(port,(err)=> err? console.log(err):console.log("server is running in port :", port))