import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalRedirectComponent, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
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



export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set("https://graph.microsoft.com/v1.0/me", ["user.read"]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
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
    MsalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
