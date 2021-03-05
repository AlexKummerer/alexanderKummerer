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
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  //contact = new Contact();
  submitted = false;
  clicked: boolean;
  messageSent = false;

  

  addressForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog
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
  sendEmail() {
    console.log("name", this.addressForm.controls['name'].value,)
    console.log("email", this.addressForm.controls['email'].value,)
    console.log("subject", this.addressForm.controls['subject'].value,)
    console.log("name", this.addressForm.controls['message'].value,)

    this.http
      .post('https://alexkummerer.de/send_mail.php', {
        name: this.addressForm.controls['name'].value,
        email: this.addressForm.controls['email'].value,
        subject: this.addressForm.controls['subject'].value,
        message: this.addressForm.controls['message'].value,
      })
      .subscribe(
        (success: any) => {
          this.openDialog(true);
          this.addressForm.reset();
          //formDirective.resetForm();
        },
        (error: any) => {
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
}
