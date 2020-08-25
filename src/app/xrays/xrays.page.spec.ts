import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XraysPage } from './xrays.page';

describe('XraysPage', () => {
  let component: XraysPage;
  let fixture: ComponentFixture<XraysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XraysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XraysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
