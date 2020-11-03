import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectServPage } from './select-serv.page';

describe('SelectServPage', () => {
  let component: SelectServPage;
  let fixture: ComponentFixture<SelectServPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectServPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectServPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
