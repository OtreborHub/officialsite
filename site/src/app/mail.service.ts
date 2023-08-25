import { Injectable, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor() {}

  public sendEmail(form: any) {
    
    var data = {
      messaggio: form.messaggio,
      email: form.email,
      nominativo: form.nominativo,
      oggetto: form.oggetto
    }

    emailjs.send("service_x632d5a", "template_z09xh33", data, "JTEfuwXjFfb8PBYdf")
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}