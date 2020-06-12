import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[A-Za-z]')]],
      LastName: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[A-Za-z]')]],
      Email : ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}$')]]
    });
  }

  ngOnInit(): void {
  }

  submitDetails(){
    console.log(this.myForm.value);
  }
}
