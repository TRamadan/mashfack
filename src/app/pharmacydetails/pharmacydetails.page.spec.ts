import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmacydetailsPage } from './pharmacydetails.page';

describe('PharmacydetailsPage', () => {
  let component: PharmacydetailsPage;
  let fixture: ComponentFixture<PharmacydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
