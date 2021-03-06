import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  //contact = new Contact();

  clicked: boolean;
  messageSent = false;
  submitted = false;

  addressForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {}
  ngOnInit(): void {}

  /**
   * Send email with contact-form-data and reset form, if form is filled correctly
   * @param formDirective
   */

  /*
  submitForm(formDirective: FormGroupDirective) {
    if (formDirective.valid) {
      console.log(formDirective.valid)
      this.sendEmail(formDirective);
      this.submitted = true;
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 60000); // Disables submitting for 60s
    }
  }
  */
  // send email to server

  async sendMail() {
    try {
      const formData = new FormData();
      formData.append('name', this.addressForm.controls['name'].value);
      formData.append('message', this.addressForm.controls['message'].value);
      formData.append('email', this.addressForm.controls['email'].value);
      let url = 'https://alexkummerer.de/send_mail.php';
      let response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData, // body data type must match "Content-Type" header
      });
      this.openDialog(true);
      this.router.navigate(['/'])
      this.addressForm.reset();
    } catch (error) {
      console.error(error);
      this.openDialog(false);
    }
  }

  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent,
      },
    });
  }

  /*
   sendEmail() {
   

     this.http
      .post('http://alexander-kummerer.developerakademie.com/send_mail.php', {
        name: this.addressForm.controls['name'].value,
        email: this.addressForm.controls['email'].value,
        message:this.addressForm.controls['message'].value

      })
      .subscribe(
        (success: any) => {
          this.openDialog(true);
          this.addressForm.reset();
          //formDirective.resetForm();
        },
        (error: any) => {
          console.error(error);
          this.openDialog(false);
        }
      );
  }


  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent,
      },
    });
  }
*/
}
