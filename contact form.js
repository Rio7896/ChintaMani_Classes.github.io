function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pranavshinde8998@gmail.com",
        Password : "CB374EEF89FF893C3D4E1C81520F8462B44E",
        To : 'pranavshinde7965@gmail.com',
        From : "pranavshinde8998@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}