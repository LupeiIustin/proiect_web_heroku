const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
    api_key: "key",
});

const recipients = [new Recipient("alexmihaita2001@yahoo,com", "Your Client")];

const emailParams = new EmailParams()
    .setFrom("your@email.com")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("Greetings from the team, you got this message through MailerSend.")
    .setText("Greetings from the team, you got this message through MailerSend.");

mailersend.send(emailParams);