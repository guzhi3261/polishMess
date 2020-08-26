import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxwmComponent } from './lxwm.component';

describe('LxwmComponent', () => {
  let component: LxwmComponent;
  let fixture: ComponentFixture<LxwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
