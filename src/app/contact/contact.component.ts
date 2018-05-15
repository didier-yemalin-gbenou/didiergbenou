import { ContactService } from './contact.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  _messageIsBlank = true;
  _captchaIsValid;

  constructor( private contactService: ContactService,
               public snackBar: MatSnackBar){}

  onKeyUp(message){
    if (message != '')
      this._messageIsBlank = false;
    else
      this._messageIsBlank = true;
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'Close', { duration: 5000 });
  }

  processCaptcha(response){
    this.contactService.validateCaptcha(response)
        .subscribe(success => {

          if (!success){
            this.openSnackBar('An unexpected error happened on Captcha Validation');
            return;
          }

          this._captchaIsValid = success;
        });
  }

  notifyCaptchaIsExpired(){
    this._captchaIsValid = false;
  }

  processForm(form: NgForm){

    if (!this._captchaIsValid){
      this.openSnackBar('Captcha validation is required');
      return;
    }

    this.contactService.sendEmail(form.value)
                        .subscribe(resp => this.openSnackBar(resp));

    this._messageIsBlank = true;
    form.resetForm();

  }
}
