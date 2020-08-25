import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadiodetailsPage } from './radiodetails.page';

describe('RadiodetailsPage', () => {
  let component: RadiodetailsPage;
  let fixture: ComponentFixture<RadiodetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiodetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadiodetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
