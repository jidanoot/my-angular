import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    registerForm: FormGroup

    constructor(private fb: FormBuilder){
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        })
    }

    doRegister(){
        if (this.registerForm.valid){
            console.log(this.registerForm.value)
            if (this.registerForm.value.password == this.registerForm.value.confirmPassword){
                console.log('password pass')
            }
        }else{
            if (this.registerForm.value.email == ''){
                console.log('empty email')
            }
        }
    }

}