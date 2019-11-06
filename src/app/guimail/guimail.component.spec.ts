import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuimailComponent } from './guimail.component';

describe('GuimailComponent', () => {
  let component: GuimailComponent;
  let fixture: ComponentFixture<GuimailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuimailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuimailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
