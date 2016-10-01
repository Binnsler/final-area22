
exports.sendEmail = function(req, res){

  var theMessage = req.body.message;
  var theSender = req.body.email;

  var helper = require('sendgrid').mail
  var from_email = new helper.Email("alert@area22.com")
  var to_email = new helper.Email("malsabado@gmail.com")
  var subject = "Form submission from " + theSender
  var content = new helper.Content("text/plain", theMessage)
  var mail = new helper.Mail(from_email, subject, to_email, content)

  var sg = require('sendgrid').SendGrid("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")
  var requestBody = mail.toJSON()
  var request = sg.emptyRequest()
  request.method = 'POST'
  request.path = '/v3/mail/send'
  request.body = requestBody
  sg.API(request, function (response) {
    res.send(response);
  })
}
