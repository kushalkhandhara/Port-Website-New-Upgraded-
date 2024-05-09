const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({ host: "sandbox.smtp.mailtrap.io",
port: 2525,
auth: {
  user: "e166f950007318",
  pass: "ce4c3094049718"
}});


const sendEmailController = (req,res)=>
{
    try
    {
        const {name,email,msg} = req.body;
        //vaildations
        if(!name || !email || !msg)
        {
            return res.status(500).send(
                {
                    success : false,
                    message : 'Please Provide All Fields'
                })
        }
        else
        {
        // email matter 
        transporter.sendMail({
            to : 'kkhandhara@gmail.com',
            from : email,
            subject : 'Regarding My PortFolio App',
            html : `<h5>Detail Information</h5>
            <ul>
                <li>Name : ${name} </li>
                <li>Email : ${email} </li>
                <li>Message: ${msg} </li>
            </ul>`

            })
        return res.status(200).send(
            {
                success : true,
                message:'Your Message Send Successfully'
            })
        }
    }
    catch(error) 
    {
        console.log(error.message);
        //Internal Server Error
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error '
        })

    }
}

module.exports = {sendEmailController}