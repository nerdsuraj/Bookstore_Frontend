import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private userservice: UserServiceService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  //login purpose

  onSumbit() {
    // this.submitted = true;
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value)
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      return this.userservice.login(reqData).subscribe((response: any) => {
        console.log("login response", response)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem('Name', response.data.Name);
        this.route.navigateByUrl('/dashboard/book')

      }, (error) => {
        console.log(error)
      })

    } else {
      console.log("login is invalid");

    }

  }

}
