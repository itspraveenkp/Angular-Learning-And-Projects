import { ClassField } from '@angular/compiler';
import { FormGroup } from '@angular/forms';


export function passwordChecker( 
    controlName: string, 
    compareControlName: string 
    ){
        return(formGroup:FormGroup) => {
            const password = formGroup.controls[controlName];
            const ConfPassword = formGroup.controls[compareControlName];

            if(password.value !== ConfPassword.value)
            {
                ConfPassword.setErrors({mustMatch: true})
            }else{
                ConfPassword.setErrors(null);
            }
        }
    }