import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }

  gototab2() {
    console.log("tab 2 function is fired")
  }

  gototab3() {
    console.log("tab 3 function is fired")
  }
}
