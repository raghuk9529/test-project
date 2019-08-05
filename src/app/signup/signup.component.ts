import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  myform:FormGroup;
  constructor()
   {
      this.myform=new FormGroup({
        fullName:new FormControl("",[Validators.required,Validators.pattern('["a-zA-Z"]*')]),
        emailName:new FormControl("",[Validators.required,Validators.email]),
        pwd:new FormControl("",[Validators.required,Validators.pattern('["a-zA-Z"]*')]),

      })
   }
}
