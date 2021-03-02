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

  addressForm = this.fb.group({
    company: null,
    name: [null, Validators.required],
    message: [null, Validators.required],
    email: [null, Validators.required],
    subject : [null, Validators.required]

  });


  constructor(private fb: FormBuilder,     
  private http: HttpClient,
  public dialog: MatDialog) {}

  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
 
  }

  /**
   * Send email with contact-form-data and reset form, if form is filled correctly
   * @param formDirective
   */
   submitForm(formDirective: FormGroupDirective) {
    if (formDirective.valid) {
      this.sendEmail(formDirective);
      this.submitted = true;
     this.clicked = true;
       setTimeout(() => {
         this.clicked = false;
       }, 60000); // Disables submitting for 60s
     }
   }

 // send email to server
  sendEmail(formDirective) {
    this.http.post('http://alexander-kummerer.developerakademie.com/send_mail.php', {
      name: this.addressForm.controls['name'].value,
      email: this.addressForm.controls['email'].value,
      subject: this.addressForm.controls['subject'].value,
      message: this.addressForm.controls['message'].value,
    })
    .subscribe(
      (success: any) => {
        this.openDialog(true);
        this.addressForm.reset();
        formDirective.resetForm();
      },
      (error: any) => {
        this.openDialog(false);
      }
    ); 
  }

  email = new FormControl('', [Validators.required, Validators.email]); 
  subject = new FormControl('', [Validators.required, Validators.minLength(2)]); 
  name = new FormControl('', [Validators.required, Validators.minLength(2)]); 
  message = new FormControl('', [Validators.required, Validators.minLength(5)]); 



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter an email-address';
    }
    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  };

  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent
      }
    }) ;

  }

}
