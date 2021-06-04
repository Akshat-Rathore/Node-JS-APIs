const sgMail= require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to:'reciever@a.com',
    from:'sender@a.com',
    subject:'Test12',
    text:'I hope this works!'
})