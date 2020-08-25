import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { DoctorService } from '../doctor/doctor.service';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class LabCenters {
    currentLab: any;
    centerType: any; // xRays Or T7lel


    constructor(public http: HttpClient, public doctorservice: DoctorService, public userservice: UserService) {
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

    labs(): Observable<any> {
        return this.http.get("http://al-eyada.com/api/v1/laboratories?type=" + this.centerType + "&city_id=" + this.doctorservice.currentCity, this.header());
    }

    /* Search On Results */
    searchLabs(searchName: any): Observable<any> {
        let url = "http://al-eyada.com/api/v1/laboratories?name=" + searchName + '&type=' + this.centerType;
        console.log(url);
        return this.http.get(url, this.header());

    }

    /* To Display Laps */

    labsDepartments(): Observable<any> {
        let url = "http://al-eyada.com/api/v1/department?detection_type=" + this.doctorservice.currentReveal + "&id=" + this.currentLab;
        console.log(url);
        return this.http.get(url, this.header());
    }
}
