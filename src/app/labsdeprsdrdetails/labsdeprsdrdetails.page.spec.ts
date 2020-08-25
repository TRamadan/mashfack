import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabsdeprsdrdetailsPage } from './labsdeprsdrdetails.page';

describe('LabsdeprsdrdetailsPage', () => {
  let component: LabsdeprsdrdetailsPage;
  let fixture: ComponentFixture<LabsdeprsdrdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabsdeprsdrdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabsdeprsdrdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
