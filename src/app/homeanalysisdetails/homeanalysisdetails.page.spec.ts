import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeanalysisdetailsPage } from './homeanalysisdetails.page';

describe('HomeanalysisdetailsPage', () => {
  let component: HomeanalysisdetailsPage;
  let fixture: ComponentFixture<HomeanalysisdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeanalysisdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeanalysisdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
