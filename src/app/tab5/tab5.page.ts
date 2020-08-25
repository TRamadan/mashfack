import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  isLoggined: any


  // demoToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc";
  // demoToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhYTI0N2NmOGRjNGU0ZmE2NDBhMTc1NDI0MTk3OGUyNTViNDRmZTdmNmNkODg5YjBlYmQ3NzJiOGU4YzQ1YjQxZGYwZTcxYjk0ZDQ0M2E2In0.eyJhdWQiOiIzIiwianRpIjoiMmFhMjQ3Y2Y4ZGM0ZTRmYTY0MGExNzU0MjQxOTc4ZTI1NWI0NGZlN2Y2Y2Q4ODliMGViZDc3MmI4ZThjNDViNDFkZjBlNzFiOTRkNDQzYTYiLCJpYXQiOjE1OTMzNTg4MzIsIm5iZiI6MTU5MzM1ODgzMiwiZXhwIjoxNjI0ODk0ODMyLCJzdWIiOiIyNzkiLCJzY29wZXMiOltdfQ.0AbaUqB_lRKN2aR2RmFAz5_DdTVxnow82Yq88WQC5XVxZmq5xptglKdjQXFGzs4eOY-Bes8g1ZzVTjp1hebpaXB2KzlPdpzTzTavYaDZXwVB6cR_59NjTkauzFa6J37p8FabViOnYB61tNk7jaZVKXhtJQvSViIb710txOr_OM10MTkhuavwz30gqMUg9tiCmMC0a2pMROIWIL7qrKR-b54gGo4iYMc7cDvLx-gMkvEIt2b8fRg-UEj9aLwQjWQS_IlGqRCSxUYyivn8Dxa_QPaOw98h9pRNAJ9CzVr1U3sGbVfxIQCboKfMLebrZ_qJZ58wY5A3Co8Dbwh8WXGFzdZ64IYWgjhuuoNJ9LN4dxoPAnp6f0gWnzAIVDTOreXE8aCcD5W0NcCJLbWHUlE25TFJz5r-E1dPsw6bHmLkzp08yAEtNB_AAWnh2d1RnHTxFHd9pa6KsklJr7N5zs7dkY4Qx0duCzvkb_5-bcS5C09MpcB7TEbxTeD8DgWr0RjweYIYhI68J3kvIzabKtfUNYyxPDgWFx0dOOgmWMhIvuBIo4Rz3ZsJfLMflO5UtIBLc_P0NeOKOgGaK4IG415JVQDWk4CGFMHpczYKoWRpW3P9a8WZfPucmbyABIUipGEnKwZC7ikH0cnNC94VDWWSlv0H-LsNTHBoN60G4Nv3vkc";
  constructor(public userservice: UserService, public navCtrl: NavController, public loadingController: LoadingController, public router: Router) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.isLoggined = JSON.parse(window.localStorage.getItem('userPatientInfo'));;
    console.log(this.isLoggined);

  }

  //Menu functions
  gotoeditprofile() {
    // if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
    //   this.router.navigateByUrl("login");
    //   console.log("here is the demo token", this.demoToken)

    //   return
    // }
    this.router.navigateByUrl("editprofile");
  }

  gotoprofile() {
    // if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
    //   this.router.navigateByUrl("login")
    //   console.log("here is the demo token", this.demoToken)
    //   return
    // }
    this.router.navigateByUrl("/tabs/tab2");
  }
  gotodates() {
    // if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
    //   this.router.navigateByUrl("login")
    //   console.log("here is the demo token", this.demoToken)
    //   return
    // }
    this.router.navigateByUrl("/tabs/tab3");
  }

  gotowelcome() {
    window.localStorage.removeItem('appPatientSettings');
    // window.localStorage.removeItem('userPatientInfo');
    // window.location.reload();
    this.router.navigateByUrl("welcomepage");
  }

  gotonotifications() {
    // if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
    //   this.router.navigate(["login"]);
    //   return
    // }
    this.router.navigateByUrl("notifications");
  }

  gotologin() {
    // this.loadingController.create({ spinner: 'bubbles', message: 'Please wait ... ' }).then((loadingElement) => {
    //   loadingElement.present();
    // });
    this.router.navigateByUrl("login");
  }

  logout() {
    window.localStorage.removeItem('userPatientInfo');

    window.location.reload();
    // this.router.navigate(["login"]);

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  changepassword() {
    // if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
    //   this.router.navigate(["login"])
    //   console.log("here is the demo token", this.demoToken)
    //   return
    // }
    this.router.navigateByUrl("changepassword")
    // console.log("this function is fired")
  }



}
