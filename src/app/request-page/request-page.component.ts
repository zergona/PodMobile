import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Request{
  fName: '',
  lName : '',
  email: '',
  ssn: '',
  domZdravlja: 0,
  symptoms: ''
};

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css'],
})
export class RequestPageComponent implements OnInit {
  baseURL="http://localhost:8080/"
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
