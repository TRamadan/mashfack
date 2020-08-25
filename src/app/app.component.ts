import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private translateservice: TranslateService,
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.translateservice.setDefaultLang('ar');
      if (window.localStorage.getItem('appPatientSettings') !== null) {
        this.translateservice.use(JSON.parse(window.localStorage.getItem('appPatientSettings')).language);
        this.translateservice.setDefaultLang(JSON.parse(window.localStorage.getItem('appPatientSettings')).language);
      }
      else
        this.translateservice.use(this.translateservice.getDefaultLang());
    });
  }




}
