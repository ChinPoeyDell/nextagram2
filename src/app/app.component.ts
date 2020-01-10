import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nextagram';
  displaySignUpForm = false;
  displayLoginForm = false;

  onClickSignUp(){
    this.displaySignUpForm = !this.displaySignUpForm
  }

  onClickLogin(){
    this.displayLoginForm = !this.displayLoginForm
  }

  isLoggedIn(){
    let authToken = localStorage.getItem("authToken")
    if(authToken){
      return true
    } else {
      return false
    }
  }

  signOut(){
    localStorage.setItem("authToken", "")
  }

}
