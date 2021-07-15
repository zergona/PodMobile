import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormArray, FormGroupDirective, NgForm, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';

export interface Request{
  fName: '',
  lName : '',
  email: '',
  ssn: '',
  domZdravlja: 0,
  symptoms: ''
};
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css'],
})

export class RequestPageComponent implements OnInit {

  baseURL="https://pregledondemand.herokuapp.com/"
  result = ''
  requestForm = this.formBuilder.group({
    fName: '',
    lName: '',
    email: '',
    ssn: '',
    symptoms: ''
  });

  handleSubmit() {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.requestForm.value);
    return this.http.post<Request>(this.baseURL + 'request/create', body,{'headers':headers}).subscribe(result => { 
      this.router.navigate(['sentrequest']);
    }, error => console.error(error));
    
  }

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private ReactiveFormsModule: ReactiveFormsModule,) {}

  ngOnInit(): void {}
}
