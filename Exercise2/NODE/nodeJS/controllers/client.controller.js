const Client = require('../models/client.model')
 
const getAllClients = (req, res) =>{ //הצגת כל הלקוחות מהמסד נתונים
    Client.find()
        .then(Clients => {
            res.send(Clients)
        }).catch(err => {
            console.log(err)
        })
}

const addClient = (req, res) => {//הוספת לקוח למסד נתונים
    const newClient = new Client({
        fullName: req.body.fullName,
        idCard: req.body.idCard,
        address: req.body.address,
        dateOfBirth: req.body.dateOfBirth,
        mobilePhone: req.body.mobilePhone,
        telephone: req.body.telephone,
        positive_result_date: req.body.positive_result_date,
        recovery_date: req.body.recovery_date,
        vaccination_dates: req.body.vaccination_dates,
        vaccine_manufacturers: req.body.vaccine_manufacturers, 
         imageFile:req.body.imageFile
    }); 
    //בדיקות תקינות נוספות למערכים
     if( newClient.vaccination_dates.length>4||newClient.vaccine_manufacturers.length>4)
          res.send("error- The number of vaccine dates or vaccine manufacturers is greater than 4");
     if( newClient.vaccination_dates!=null && newClient.vaccine_manufacturers!=null &&newClient.vaccine_manufacturers.length!=newClient.vaccination_dates.length)
          res.send("error- The amount of vaccine dates or vaccine manufacturers is not equal");
     
    newClient.save()
        .then(Client => {
            res.send(Client)
        }).catch(err => {
            console.log(err)
        })
}



module.exports = { getAllClients, addClient }