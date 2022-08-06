import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private userservice: UserServiceService, private formbuilder: FormBuilder,private snackbar:MatSnackBar) { }
  
  ngOnInit(): void {
    
    this.signupForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  register(){
    if(this.signupForm.valid){
      // console.log(this.registerForm.value)
      let reqData ={
        firstname:this.signupForm.value.firstname,
        lastname:this.signupForm.value.lastname,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
      }
      this.userservice.registration(reqData) .subscribe((response:any)=>{
        console.log(response)
        //snack bar will be added here
        this.snackbar.open("Registration sucessfully done!!",'',{
          duration: 3000,
        })
      },(error)=>{
        console.log(error)
      }
        )
    }else{
      console.log("form is inValid");
    }
    
  }

}
