import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId:string = "";
  userPassword: string = "";
  loginErrMsg:string = "";

  constructor(
    private _router: Router,
    private loginService: LoginService) {}

  login() {
    this.loginErrMsg = "";
    if(!this.loginService.isValidLogin(this.userId, this.userPassword)) {
      this.loginErrMsg = "Invalid login. Please try again.";
    }else{
      this.loginService.login(this.userId);
      this._router.navigate(["home"])
    }
  }
}
