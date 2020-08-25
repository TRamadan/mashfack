import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalsandclinicsPage } from './hospitalsandclinics.page';

describe('HospitalsandclinicsPage', () => {
  let component: HospitalsandclinicsPage;
  let fixture: ComponentFixture<HospitalsandclinicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalsandclinicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalsandclinicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
