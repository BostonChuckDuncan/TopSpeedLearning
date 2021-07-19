import { environment } from './../../../../environments/environment';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnChanges {
  contactUsForm: FormGroup;
  isSubmitted: boolean;
  hasErrors: boolean = false;

  constructor(private fb: FormBuilder) {
    this.isSubmitted = false;
    this.contactUsForm = this.fb.group({
       email: ['', [Validators.required,
          Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
       phone: ['', Validators.pattern('^([1-9]{1}-)?[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
       message: ['', [Validators.required, Validators.minLength(10)]]
   });
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.hasErrors = this.contactUsForm.errors == null ? false : true;
  }

  ngOnInit() {

  }

 
 
  get f() { return this.contactUsForm.controls; }

  submitContactUs() {
    this.isSubmitted = true;
    let url = environment.apiUrl;
    url = url + 'Contacts/SendNewMessage';


    // const msg = new UserSendMsg();
    // msg.email = this.f.email.value;
    // msg.phone = this.f.phone.value;
    // msg.message = this.f.message.value;

    // this.http.post(url, msg).subscribe(() => {
    //   console.log('OK');
    // });
  }

}
