import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  loginForm !: FormGroup;
  dataa: any;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void { this.loginForm = this.fb.group({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    memberType: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    cc: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required,Validators.pattern("^(|0)?[0-9]{10}$")]),
    textarea: new FormControl("",[Validators.required]),
    checkbox: new FormControl("",[Validators.requiredTrue]),
  });
  console.log(this.loginForm);
  this.loginForm.valueChanges.subscribe((data) => {
    this.dataa = data;
    console.log(this.dataa);
  });
}
onSubmit() {
  console.log(this.dataa);
  console.log(this.loginForm.value);
}
loadValues() {
  let obj = {
    username: 'Mitchell Doe',
    password: '1234567890',
    memberType: 'permanent member',
    date: new Date(),
    cc:"+91",
    phone:"9881060153",
    textarea: 'this is a msg',
    checkbox: 'true',
  };

  this.loginForm.setValue(obj);
}
reset() {
  this.loginForm.reset();
}
}

