import { TestBed } from '@angular/core/testing';

import { LabCenters } from '../labscenters/labscenters.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: LabCenters = TestBed.get(LabCenters);
        expect(service).toBeTruthy();
    });
});
