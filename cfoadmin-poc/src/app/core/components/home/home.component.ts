import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private configService: ConfigService, private loginService: LoginService) {}
  
  isUserLoggedIn():boolean {
    return this.loginService.isUserLoggedIn();
  }
}
