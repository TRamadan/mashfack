import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  rate: number;
  comment: string;
  id: any;
  comments = [];

  constructor(public router: Router, public platform: Platform, public alertCtrl: AlertController, public doctorservice: DoctorService, public translate: TranslateService) {

  }

  ionViewDidEnter() {

  }

  ngOnInit() {
    this.doctorservice.id = this.platform.getQueryParam("id");
    console.log("akdfaldklakdlakdlkl", this.doctorservice.id);
    this.rate = 0;
    this.displayComments();
    console.log('ionViewDidLoad DrevaluationPage');
    $(".Rate").show(500, function () {
      $(".Rate ion-icon").eq(0).slideDown(500, function () {
        $(".Rate ion-icon").eq(1).slideDown(500, function () {
          $(".Rate ion-icon").eq(2).slideDown(500, function () {
            $(".Rate ion-icon").eq(3).slideDown(500, function () {
              $(".Rate ion-icon").eq(4).slideDown(500, function () {
                $(".Rate ion-icon").css("color", "black");
                $(".Rate ion-icon").css("cursor", "pointer");
                $(".layer").fadeOut(500, function () {
                });
              });
            });
          });
        });
      });

    });


    // function to set rate
    let setRate = (x: any) => {
      this.rate = x;
      for (let i = 0; i < this.rate; i++) {
        $(".Rate ion-icon").eq(i).css("color", "#F7991E");
      }
      for (let i = this.rate; i < 6; i++) {
        $(".Rate ion-icon").eq(i).css("color", "white");
      }

    }
    let sendRate = () => {
      let rate = this.rate;
      let comment = this.comment;
      this.doctorservice.rate(rate, comment).subscribe((date) => {
        if (this.translate.getDefaultLang() === "en") {
          this.ShowAlertError("Thanks For Your Rating", "");
          this.router.navigateByUrl("/")
        }

        else {
          this.ShowAlertError("شكرا لتقيمك", "");
          this.router.navigateByUrl("/");
        }

        this.comment = " ";
        redisplay();

      })

    }

    $(".Rate ion-icon").click(function () {
      let rate = $(this).attr("id");
      console.log("from line 74", rate)
      setRate(rate);
    })


    let redisplay = () => {
      this.displayComments();
    }

    $(".sendBtn").click(function () {
      sendRate();
    })
  }

  displayComments() {
    let GE = this.translate.instant('General Evaluation');
    this.doctorservice.comments().subscribe(data => {
      this.comments = data;
      console.log(this.comments)
    }, error => {
      console.log(error)
    })
    // let GE = this.translate.instant('General Evaluation');
    // this.doctorservice.comments().subscribe((data) => {
    //   let temp = "";
    //   for (let i = 0; i < data.length; i++) {
    //     temp += '<div class="comment"> <div class="row-1"> <div class="row-1-1"> <h6> ' + GE + ' </h6> <div class="starts" style="text-align: center;"> ';
    //     for (let j = 0; j < data[i].rate; j++) {
    //       temp += '<i class="fa fa-star star" ></i> ';
    //     }
    //     temp += ' </div></div></div><div class="row-2"> <h6> " ' + data[i].comment + ' "</h6> </div></div>';
    //   }
    //   document.getElementById("comments").innerHTML = temp;
    // }, (error) => {

    // })
  }

  async ShowAlertError(x: string, y: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: y,
      message: x,
      buttons: ['OK']
    });

    await alert.present();
  }

  gotomainpage() {
    this.router.navigateByUrl("/");
  }

}
