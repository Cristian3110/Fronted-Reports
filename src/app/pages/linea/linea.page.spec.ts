import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineaPage } from './linea.page';

describe('LineaPage', () => {
  let component: LineaPage;
  let fixture: ComponentFixture<LineaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
