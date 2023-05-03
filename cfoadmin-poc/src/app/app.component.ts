import { Component } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CFO Admin POC';
  loggedInUserName!: String;
  configModel$ = this.configService.configModel$;
  
  constructor(private configService: ConfigService, private loginService: LoginService) {}
  
  isUserLoggedIn(): boolean {
    return this.loginService.isUserLoggedIn();
  }
  
  logout() {
    this.loginService.logout();
  }
}
