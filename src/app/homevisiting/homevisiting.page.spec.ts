import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomevisitingPage } from './homevisiting.page';

describe('HomevisitingPage', () => {
  let component: HomevisitingPage;
  let fixture: ComponentFixture<HomevisitingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevisitingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomevisitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
