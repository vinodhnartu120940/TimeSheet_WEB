import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimesheetcontentComponent } from './timesheetcontent/timesheetcontent.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MsalRedirectComponent, MSAL_INSTANCE } from '@azure/msal-angular';
import { BrowserCacheLocation, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MsalModule} from '@azure/msal-angular';
import { MsalService } from '@azure/msal-angular';



function MsalInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:"be6da587-914f-474f-99ff-593cd29df547",
      authority:"https://login.microsoftonline.com/83a0054a-60ce-461f-a1f6-0e72d03c8dbb",
      redirectUri:"/timesheet",
      
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: false, // set to true for IE 11
    },
  })
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimesheetcontentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    MsalModule
  ],
  providers: [DatePipe,
    {
      provide:MSAL_INSTANCE,
      useFactory:MsalInstanceFactory
    },
    MsalService
    
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
