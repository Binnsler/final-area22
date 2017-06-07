const helper = require( "sendgrid" ).mail;

exports.sendEmail = function( req, res ){
  const theMessage = req.body.message;
  const theSender = req.body.email;

  const from_email = new helper.Email( "alert@area22.com" );
  const to_email = new helper.Email( "malsabado@gmail.com" );
  const subject = "Form submission from " + theSender;
  const content = new helper.Content( "text/plain", theMessage );
  const mail = new helper.Mail( from_email, subject, to_email, content );

  const sg = require( "sendgrid" ).SendGrid( process.env.SENDGRID_API );
  const requestBody = mail.toJSON();

  let request = sg.emptyRequest();

  request.method = "POST";
  request.path = "/v3/mail/send";
  request.body = requestBody;

  sg.API( request, function ( response ){
    res.send( response );
} );
}
