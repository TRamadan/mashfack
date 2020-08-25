import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepcialitydetailsPage } from './sepcialitydetails.page';

describe('SepcialitydetailsPage', () => {
  let component: SepcialitydetailsPage;
  let fixture: ComponentFixture<SepcialitydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepcialitydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepcialitydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
