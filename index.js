var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const path = require('path');

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`El server te está escuchando wacho, manda fruta que te oigo en el puerto: ${port}`);
    }
});


//SUPONGO QUE ESTE FRAGMENTO DE CODIGO SE ENCARGA DE TRAER LOS DATOS
// DESDE EL FRONTEND, ES DECIR, SUPONGO QUE ACA IRIA EL LINK DONDE ESTÁ ALOJADO EL FRONT.
router.post('', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name,
        to: 'zigaran114@gmail.com',
        subject: 'Nuevo Mensaje de tu Curriculum Web',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


// const port = 'https://prueba-mailbox.web.app/';
const app = express()
const port = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(port)



// ESTO ES EXPERIMENTO 

