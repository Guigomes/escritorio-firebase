'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

let url = "smtps://ggsoftware.aplicativos@gmail.com:" + encodeURIComponent('GGS48756199') + "@smtp.gmail.com:465";
let transporter = nodemailer.createTransport(url);

exports.enviarEmailFaleConosco = functions.database.ref('/faleconosco/{pushId}').onWrite(event => {

    const faleconosco = event.after.val().faleconosco;

    let remetente = '"Fale Conosco Aquarius" <email@gmail.com>';

    let corpoHtml = "<p>Você recebeum um contato de " + faleconosco.nome + ".</p>"
    corpoHtml += "<p>E-mail: " + faleconosco.email + "</p>";
    if (faleconosco.telefone != null) {
        corpoHtml += "<p>Telefone: " + faleconosco.telefone + "</p>";
    } else {
        corpoHtml += "<p>Telefone: Não informado </p>";
    }
    corpoHtml += "<p>Assunto: " + faleconosco.assunto + "</p>";
    corpoHtml += "<p>Mensagem</p>";
    corpoHtml += "<p>" + faleconosco.mensagem + "</p>";



    let email = {
        from: remetente,
        to: "aquarius.msi@terra.com.br",
        subject: "Fale Conosco - " + faleconosco.nome,
        html: corpoHtml
    };


    transporter.sendMail(email, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });

});