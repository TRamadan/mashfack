import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialtyPage } from './specialty.page';

describe('SpecialtyPage', () => {
  let component: SpecialtyPage;
  let fixture: ComponentFixture<SpecialtyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialtyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
