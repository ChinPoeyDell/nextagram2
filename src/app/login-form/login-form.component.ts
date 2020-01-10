import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() displayLoginForm;
  loginForm = new FormGroup({
    username: new FormControl("dummy1"),
    password: new FormControl("dummy123")
  })
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    const formValues = this.loginForm.value
    this.userService.login(formValues.username, formValues.password).subscribe(response => {
      const authToken = response["auth_token"]
      localStorage.setItem('authToken', authToken)
      console.log("Successful Logged In")
    })
    // this.userService.getMyImages().subscribe(response => {
    //   console.log(response)
    // })
  }

}
