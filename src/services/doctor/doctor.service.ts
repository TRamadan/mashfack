import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "../user/user.service";
@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    currentHospital: any;
    currentHClinic: any;
    currentClinicCenter: any;

    location_id: any;
    name: any;
    category: any;
    currentSpecial: any;
    currentGoverment: any;
    currentCity: any;
    currentReveal: any;
    bookType: any; // no3 el kshf mnzly wla online wla 3adi
    currentID: any;
    locationID: any;
    id: any;
    speciality: any;
    phone: any;
    title: any;
    address: any;
    waiting_time: any;
    price: any;
    avatar: any;
    info: any;

    bookDate: any;
    bookRange: any;

    H: number = 0;
    C: number = 0;
    D: number = 0;

    bookerName: any;
    dayType;

    time: any;

    bookername: any;
    bookerphone: any;



    public apiurl2 = "http://al-eyada.com/api/v1/";

    constructor(public http: HttpClient, public userservice: UserService) {
        console.log("hello from doctor service")
    }


    // here is the function needed to show all the added specialities 
    specialties(): Observable<any> {
        const headers = {
            'Authorization': "Bearer " + this.userservice.token
        };
        let config = {
            'headers': headers,
        };
        console.log(this.userservice.token);
        // "http://al-eyada.com/api/v1/specialties
        return this.http.get(`${this.apiurl2}specialties`, config);
    }

    //here is the function needed to get all needed reveals 
    //el function d 3shan trag3 anwa3 el kshofat 
    reveals(): Observable<any> {
        return this.http.get(`${this.apiurl2}detection_type`, this.header());
    }

    //here is the function needed to get the needed drs under the choosed reveal type
    results(): Observable<any> {
        return this.http.get(`${this.apiurl2}doctor?filter&city_id=` + this.currentCity + "&speciality_id=" + this.currentSpecial + "&detection_id=" + this.currentReveal + ""
            , this.header());
    }

    header() {
        const headers = {
            "Accept": "application/json",
            'Authorization': "Bearer " + this.userservice.token
        };
        let config = {
            'headers': headers,
        };
        return config;
    }

    //here is a function needed to get all the governorates
    governorates(): Observable<any> {
        const headers = {
            'Authorization': "Bearer " + this.userservice.token,
        };
        let config = {
            'headers': headers,
        };
        // "http://al-eyada.com/api/v1/governorates/410"
        return this.http.get(`${this.apiurl2}governorates/410`, config);
    }

    cities(): Observable<any> {
        const headers = {
            'Authorization': "Bearer " + this.userservice.token,
        };
        let config = {
            'headers': headers,
        };
        return this.http.get(`${this.apiurl2}cities/` + Number(this.currentGoverment), config);
    }


    // to display My Fav
    displayFav(): Observable<any> {
        const headers = {
            "Accept": "application/json",
            'Authorization': "Bearer " + this.userservice.token,
        };
        let config = {
            'headers': headers,
        };
        let url = "http://al-eyada.com/api/v1/favourite";
        return this.http.get(url, config);
    }

    deleteFav(x: any): Observable<any> {
        // let y = {};
        let url = "http://al-eyada.com/api/v1/delete/favourite/" + x;
        return this.http.post(url, x, this.header());
    }

    // to adelete date
    cancelDate(x: any, z: any): Observable<any> {
        let y = { reason: z }
        let url = "http://al-eyada.com/api/v1/delete/booking/" + x;
        console.log(this.header())
        return this.http.post(url, y, this.header());
    }

    //here is a function needed to get the doctors under the selected reveal type
    filteration(): Observable<any> {
        let url = "http://al-eyada.com/api/v1/doctor?filter&city_id=" + this.currentCity + "&speciality_id=" + this.currentSpecial + "&detection_id=" + this.currentReveal;
        console.log(url);
        return this.http.get(url, this.header());
    }

    //here is a function needed to get all the dates and waiting times for the selected dr 
    displayDates(): Observable<any> {
        let url = "http://al-eyada.com/api/v1/booking";
        return this.http.get(url, this.header());
    }

    Dates(): Observable<any> {
        let url = "http://al-eyada.com/api/v1/workday/doctor/" + this.id + "?location_id=" + this.location_id + '&detection_id=' + this.bookType;
        console.log(url);
        return this.http.get(url, this.header());
    }


    // to add item to user favourits
    favourite(x: any): Observable<any> {

        const headers = {
            "Accept": "application/json",
            'Authorization': "Bearer " + this.userservice.token,
        };
        let config = {
            'headers': headers,
        };
        console.log("from the function needed to add a new item in fav.", this.userservice.token);
        let url = "http://al-eyada.com/api/v1/favourite";
        return this.http.post(url, x, config);
    }


    visitTimes(): Observable<any> {
        let url = "http://al-eyada.com/api/v1/worktime/doctor?date=" + this.bookDate + "&time_id=" + this.bookRange + "&doctor_id=" + this.id;
        console.log(url)
        return this.http.get(url, this.header());
    }


    hospitales(): Observable<any> {
        return this.http.get("http://al-eyada.com/api/v1/hospital?city_id=" + this.currentCity, this.header());

    }

    hSearch(searchName: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('X-App-Locale', 'en');
        let url = "http://al-eyada.com/api/v1/hospital?name=" + searchName;
        console.log(url);
        return this.http.get(url, this.header());
    }

    //here is a function needed to find the clinics under the selected hospital
    ClinicsUnderHospitals(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('X-App-Locale', 'en');
        let url = "http://al-eyada.com/api/v1/hospital/" + this.currentHospital;
        return this.http.get(url, this.header());
    }

    //here is the function needed to get the doctors works in the selected clinic under the selected hospital
    hcDoctors(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('X-App-Locale', 'ar');
        let url = "http://al-eyada.com/api/v1/clinic/" + this.currentHClinic;
        return this.http.get(url, this.header());
    }

    //here is the function needed to get the clinics 
    clinicCenters(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('X-App-Locale', 'en');
        let url = "http://al-eyada.com/api/v1/clinic?city_id=" + this.currentCity;
        return this.http.get(url, this.header());
    }

    //here is the function needed to get the needed doctors unded the selected clinic
    clinicDoctors(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('X-App-Locale', 'en');
        let url = "http://al-eyada.com/api/v1/show_center/" + this.currentClinicCenter;
        return this.http.get(url, this.header());
    }

    book(x: any): Observable<any> {
        let url = "http://al-eyada.com/api/v1/booking/doctor";
        return this.http.post(url, x, this.header());
    }

    rate(x: any, y: any): Observable<any> {
        if (y == undefined) {
            y = '';
        }
        let rate = {
            id: this.id,
            type: this.category,
            rate: x,
            comment: y
        }
        console.log(rate);
        let url = "http://al-eyada.com/api/v1/rate";
        return this.http.post(url, rate, this.header());
    }

    // to display comments for selected item
    comments(): Observable<any> {

        let url = "http://al-eyada.com/api/v1/rates?type=" + this.category + "&id=" + this.id;
        console.log(url)
        console.log(this.currentID);
        return this.http.get(url, this.header());
    }

}