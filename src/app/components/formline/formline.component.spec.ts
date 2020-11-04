import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormlineComponent } from './formline.component';

describe('FormlineComponent', () => {
  let component: FormlineComponent;
  let fixture: ComponentFixture<FormlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
