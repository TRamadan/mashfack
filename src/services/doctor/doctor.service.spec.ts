import { TestBed } from '@angular/core/testing';

import { DoctorService } from '../../services/doctor/doctor.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DoctorService = TestBed.get(DoctorService);
        expect(service).toBeTruthy();
    });
});
