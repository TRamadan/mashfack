import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClinicsunderhostdrsPage } from './clinicsunderhostdrs.page';

describe('ClinicsunderhostdrsPage', () => {
  let component: ClinicsunderhostdrsPage;
  let fixture: ComponentFixture<ClinicsunderhostdrsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsunderhostdrsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicsunderhostdrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
