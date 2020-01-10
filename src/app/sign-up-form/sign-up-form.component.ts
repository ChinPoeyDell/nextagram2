import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  @Input() displaySignUpForm;
  signUpForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    const formValues = this.signUpForm.value
    this.userService.signUp(
      formValues.username, 
      formValues.email, 
      formValues.password
    ).subscribe(response => {
      console.log(response)
    })
  }

}
