import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevealtypesPage } from './revealtypes.page';

describe('RevealtypesPage', () => {
  let component: RevealtypesPage;
  let fixture: ComponentFixture<RevealtypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevealtypesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevealtypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
