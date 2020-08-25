import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosecityPage } from './choosecity.page';

describe('ChoosecityPage', () => {
  let component: ChoosecityPage;
  let fixture: ComponentFixture<ChoosecityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosecityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosecityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
