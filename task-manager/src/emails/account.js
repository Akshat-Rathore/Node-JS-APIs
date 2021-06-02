const sendgridapikey=key
const sgMail= require('@sendgrid/mail')

sgMail.setApiKey(sendgridapikey)

sgMail.send({
    to:'reciever@a.com',
    from:'sender@a.com',
    subject:'Test12',
    text:'I hope this works!'
})