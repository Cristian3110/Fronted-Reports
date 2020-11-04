import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForminterComponent } from './forminter.component';

describe('ForminterComponent', () => {
  let component: ForminterComponent;
  let fixture: ComponentFixture<ForminterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForminterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
