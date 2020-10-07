import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuqiuComponent } from './xuqiu.component';

describe('XuqiuComponent', () => {
  let component: XuqiuComponent;
  let fixture: ComponentFixture<XuqiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuqiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuqiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
