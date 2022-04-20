import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface MailRes {
    contact_form_id: number,
    status: string,
    message: string,
    posted_data_hash: string,
    into: string,
    invalid_fields: any[]
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'Contact Form';
  submitText = 'SUBMIT';
  mailRes: MailRes;

  contactForm: FormGroup

  constructor(
      private testService: TestService
  ) { }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      'your-name': new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required]
      }),
      'your-email': new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required, Validators.email]
      }),
      'your-subject': new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required, Validators.maxLength(25)]
      }),
      'your-message': new FormControl(null, {
        updateOn: 'change',
        validators: [ Validators.required]
      }),
    });
  }


onSubmit() {
    this.submitText = 'SENDING ...';
    console.log(this.contactForm);
    this.testService.postFormData(this.contactForm.value).subscribe( (res: MailRes) =>{
      this.mailRes = res;
      this.submitText = 'SUBMIT';
      console.log(res)
    });

  }

}
