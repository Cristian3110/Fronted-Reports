import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormLineaComponent } from './form-linea.component';

describe('FormLineaComponent', () => {
  let component: FormLineaComponent;
  let fixture: ComponentFixture<FormLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLineaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
