import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  isValidLogin(userId:string, userPassword:string ):boolean {
    return userId == 'cfo' && userPassword == 'admin';
  }
  
  login(userId:string) {
    localStorage.setItem("loggedInUserId", userId);
  }
  
  logout() {
    localStorage.removeItem("loggedInUserId");
  }
  
  isUserLoggedIn():boolean {
    return localStorage.getItem("loggedInUserId") != null;
  }
}
