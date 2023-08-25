import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../mail.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.sass']
})
export class ContactusComponent implements OnInit {

  @ViewChild('emailForm') emailForm!: ElementRef;
  
  public form!: FormGroup;
  public lang: string = 'it';

  constructor(
    private fb: FormBuilder, 
    private mailService: MailService,
    private translation: TranslationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nominativo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oggetto: [''], // Questo campo non è obbligatorio
      messaggio: ['', Validators.required]
    });

    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.form.valid) {
      //Validare caratteri speciali
      const formData = this.form.value;
      this.mailService.sendEmail(formData);
      this.form.reset();
    }
  }

  onReset() {
    this.form.reset();
  }
}
   