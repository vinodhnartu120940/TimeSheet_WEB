import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private msalService: MsalService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null
  }


  login() {
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
      this.router.navigate(["user/profile"]);
    })
}

  logout() {
    this.msalService.logoutRedirect();
    let msalInstance: PublicClientApplication = this.msalService.instance as PublicClientApplication;
    msalInstance["browserStorage"].clear();
    this.router.navigate(["/"]);

  }
}
